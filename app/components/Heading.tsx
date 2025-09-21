'use client'

interface HeadingProbs {
    title: string
    subtitle?: string
    center?:boolean
}

const Heading: React.FC<HeadingProbs> = ({
    title,
    subtitle,
    center
}) => {
    
}

export default Heading