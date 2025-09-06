import Link from "next/link";
import Image from "next/image";

type LogoProps = {
    className?: string;
    dark?: boolean;
};

const Logo = ({ className, dark }: LogoProps) => (
    <Link className={`flex items-center ${className}`} href="/">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
                <Image
                    src="/images/tarx-logo.svg"
                    alt="TARX"
                    width={32}
                    height={32}
                    className="w-full h-full"
                />
            </div>
            <span className="text-xl font-bold tracking-tight">
                Hello, John
            </span>
        </div>
    </Link>
);

export default Logo;
