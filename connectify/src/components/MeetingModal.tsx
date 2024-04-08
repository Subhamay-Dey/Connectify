import React, { ReactNode } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
  
interface MeetingProps{
    isOpen: boolean,
    onClose: () => void,
    title: string,
    className?: ReactNode,
    children ?: ReactNode,
    handleClick?: () => void,
    buttonText?: string,
    image?: string,
    buttonIcon?: string
}

const MeetingModal = ({isOpen, onClose, title, className, children, handleClick, buttonText, image, buttonIcon} : MeetingProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='flex w-full max-[520px] flex-col gap-6 boder-none bg-dark-1 px-6 py-9 text-white'>
        <div className='flex flex-col gap-7'>
                {image && (
                    <div className='flex justify-center'>
                        <Image
                            src={image}
                            alt='Meeting Picture'
                            height={73}
                            width={73}
                        />
                    </div>
                )}
                <h2 className={cn("text-3xl font-semibold", className)}>
                    <DialogTitle>{title}</DialogTitle>
                   {children} 
                </h2>
                <Button className='focus-visible:ring-0 focus-visible:ring-offset-0 bg-blue-1' onClick={handleClick}>
                    {buttonIcon && (
                        <Image src={buttonIcon} alt='buttonIcon' width={14} height={14}/>
                    )}&nbsp;
                    {buttonText || "Schedule a meeting"}
                </Button>
            </div>

        </DialogContent>
    </Dialog>

  )
}

export default MeetingModal