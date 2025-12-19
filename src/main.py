import logging
from payment_processor.config import Config
from payment_processor.payment_gateways import PaymentGateways
from payment_processor.request_handler import RequestHandler

def main():
    # Configure logging
    logging.basicConfig(level=logging.INFO)

    # Load configuration
    config = Config()

    # Create payment gateways instance
    payment_gateways = PaymentGateways(config)

    # Create request handler instance
    request_handler = RequestHandler(config, payment_gateways)

    # Start the payment processor
    request_handler.start()

if __name__ == "__main__":
    main()