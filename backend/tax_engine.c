#include <stdio.h>
#include <stdlib.h>

/**
 * Single Point of Truth Tax Engine
 * Accepts pointers for subtotal, tax_amount, and grand_total.
 * Applies exact 8% tax rate and 40.00 Rs flat delivery fee.
 */
void calculate_tax(const double *subtotal, double *tax_amount, double *grand_total) {
    const double TAX_RATE = 0.08; // 8% single point of truth
    const double DELIVERY_FEE = 40.00; // Flat 40.00 Rs delivery fee
    
    if (subtotal != NULL && tax_amount != NULL && grand_total != NULL) {
        *tax_amount = (*subtotal) * TAX_RATE;
        *grand_total = (*subtotal) + (*tax_amount) + DELIVERY_FEE;
    }
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <subtotal>\n", argv[0]);
        return 1;
    }

    double subtotal = atof(argv[1]);
    double tax_amount = 0.0;
    double grand_total = 0.0;
    double delivery_fee = 40.00;

    // Call void function passing memory addresses (pointers)
    calculate_tax(&subtotal, &tax_amount, &grand_total);

    // Output strictly formatted JSON string
    printf("{\"subtotal\": %.2f, \"deliveryFee\": %.2f, \"taxAmount\": %.2f, \"grandTotal\": %.2f}\n",
           subtotal, delivery_fee, tax_amount, grand_total);

    return 0;
}
