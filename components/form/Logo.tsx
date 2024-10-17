import Image from 'next/image';

interface ShipmentXLogoProps {
  className?: string;
}

const ShipmentXLogo: React.FC<ShipmentXLogoProps> = ({ className = '' }) => (
  <Image
    src="/sh-logo-teal-yellow.svg"
    width={149.33}
    height={32}
    alt="ShipmentX Logo"
    className={`h-10 ${className}`}
    priority
  />
);

export default ShipmentXLogo;
