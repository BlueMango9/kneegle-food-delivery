const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// POST /api/calculate
app.post('/api/calculate', (req, res) => {
  const { subtotal } = req.body;

  if (subtotal === undefined || subtotal === null || isNaN(subtotal)) {
    return res.status(400).json({ error: 'Valid subtotal parameter is required' });
  }

  const numericSubtotal = parseFloat(subtotal);

  // Determine binary path (support .exe on Windows or binary on Linux)
  const isWindows = process.platform === 'win32';
  const binaryName = isWindows ? 'tax_engine.exe' : 'tax_engine';
  const binaryPath = path.join(__dirname, binaryName);

  // Check binary exists
  if (!fs.existsSync(binaryPath)) {
    console.error(`Binary not found at ${binaryPath}`);
    return res.status(500).json({ error: 'Tax engine binary not found. Please compile tax_engine.c first.' });
  }

  // Construct command line call
  const command = `"${binaryPath}" ${numericSubtotal}`;

  // Ensure MSYS2 ucrt64 DLLs are in PATH if on Windows
  const options = {
    cwd: __dirname,
    env: {
      ...process.env,
      PATH: isWindows ? `C:\\msys64\\ucrt64\\bin;${process.env.PATH || ''}` : process.env.PATH
    }
  };

  // Execute C binary via child_process.exec
  exec(command, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ error: 'Failed to execute tax engine binary', details: stderr });
    }

    try {
      const result = JSON.parse(stdout.trim());
      return res.json(result);
    } catch (parseError) {
      console.error(`JSON Parse error on output: "${stdout}"`);
      return res.status(500).json({ error: 'Invalid JSON response from tax engine', rawOutput: stdout });
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', engine: 'C Tax Engine Bridge' });
});

app.listen(PORT, () => {
  console.log(`Kneegle Express Server running on port ${PORT}`);
});
