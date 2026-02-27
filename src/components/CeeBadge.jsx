import React from 'react';

const CeeBadge = ({ className = '' }) => {
    return (
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-primary-dark font-mono text-xs font-bold ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-dark animate-pulse"></span>
            Éligible CEE P6
        </span>
    );
};

export default CeeBadge;
