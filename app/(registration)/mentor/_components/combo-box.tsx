"use client"

import { ChevronsUpDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useEffect, useState, useTransition } from "react"
import { getTechStacks } from "../../_utils/apiCalls"

type Framework = {
    value: string
    label: string
}

type ComboBoxProps = {
    placeholder: string;
    value: string; // comma separated string
    onChange: (value: string) => void // accepts comma separated string
}

export function Combobox({ placeholder, value, onChange }: ComboBoxProps) {
    const [open, setOpen] = useState(false);
    const [frameworks, setFrameworks] = useState<Framework[]>([]);
    const [isPending, startTransition] = useTransition();

    const selectedValues = value ? value.split(",").filter(Boolean) : [];

    useEffect(() => {
        startTransition(async() => {
            const data = await getTechStacks();
            const result: Framework[] = [];
            
            Object.entries(data).forEach(([key, value]) => {
                result.push({ value: key, label: value });
            });
            setFrameworks(result);
        })
    }, [])

    const handleSelect = (selectedValue: string) => {
        let updatedValues
        if (selectedValues.includes(selectedValue)) {
            updatedValues = selectedValues.filter((v) => v !== selectedValue);
        }
        else {
            updatedValues = [...selectedValues, selectedValue];
        }
        onChange(updatedValues.join(","));
    }

    const handleRemove = (removedValue: string) => {
        const updatedValues = selectedValues.filter((v) => v !== removedValue);
        onChange(updatedValues.join(","));
    }

    return (
        <div className="flex items-center gap-4">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="border-2 border-textyellow text-white"
                        disabled={isPending}
                    >
                        {placeholder}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0 ml-8">
                    <Command className="bg-white">
                        <CommandInput
                            placeholder="Search framework..."
                        />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup className="py-0">
                                {frameworks.map((framework, idx) => (
                                    <CommandItem
                                        key={idx}
                                        value={framework.value}
                                        onSelect={() => handleSelect(framework.value)}
                                    >
                                        <span className="cursor-pointer hover:text-textyellow">{framework.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="flex flex-wrap gap-2">
                {selectedValues.map((selectedValue) => (
                    <Badge
                        key={selectedValue}
                        variant="default"
                        className="flex items-center gap-1.5 bg-textyellow rounded-xl h-7"
                    >
                        {frameworks.find((f) => f.value === selectedValue)?.label}
                        <X
                            className="cursor-pointer w-4 h-4"
                            onClick={() => handleRemove(selectedValue)}
                        />
                    </Badge>
                ))}
            </div>
        </div>
    )
}
