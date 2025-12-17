export interface PaymentDetails {
    amount: number;
    currency: string;
    customerId: string;
    paymentMethod: PaymentMethod;
    metadata?: Record<string, unknown>;
}

export enum PaymentMethod {
    CreditCard = 'CREDIT_CARD',
    PayPal = 'PAYPAL',
    BankTransfer = 'BANK_TRANSFER',
}

export interface PaymentResponse {
    id: string;
    status: PaymentStatus;
    amount: number;
    currency: string;
    timestamp: Date;
    paymentMethod: PaymentMethod;
}

export enum PaymentStatus {
    Pending = 'PENDING',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    Refunded = 'REFUNDED',
}

export interface RefundDetails {
    paymentId: string;
    amount: number;
    reason?: string;
}

export interface RefundResponse {
    id: string;
    paymentId: string;
    amount: number;
    status: RefundStatus;
    timestamp: Date;
}

export enum RefundStatus {
    Pending = 'PENDING',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
}