'use client'
import dynamic from "next/dynamic";

function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return 'TH';
    switch (day % 10) {
        case 1: return 'ST';
        case 2: return 'ND';
        case 3: return 'RD';
        default: return 'TH';
    }
}

function formatDate(isoDate: string) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const ordinal = getOrdinalSuffix(day);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();

    return `${day}${ordinal} ${month} ${year}`;
}

function DateComponent({ date }: { date: string }) {
    return formatDate(date);
}

const DateCard = dynamic(() => Promise.resolve(DateComponent), { ssr: false });
export default DateCard;
