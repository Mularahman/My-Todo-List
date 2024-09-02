"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function AvatarDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-center"
                ref={buttonRef}
            >
                <Image className="mr-2" src="/images/avatar.png" alt="avatar" width={50} height={50} />
                <p className="text-white">Avatar</p>
                <span className="ml-2">
                    <svg fill="CurrentColor" className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={16} height={16}>
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
                    ref={dropdownRef}
                >
                    <ul className="py-2">
                        <li>
                            <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                        </li>
                        <li>
                            <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                        </li>
                        <li>
                            <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
