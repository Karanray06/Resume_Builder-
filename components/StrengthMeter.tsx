import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

interface StrengthMeterProps {
    resume: any;
}

export const StrengthMeter: React.FC<StrengthMeterProps> = ({ resume }) => {
    const [score, setScore] = useState(0);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        calculateStrength();
    }, [resume]);

    const calculateStrength = () => {
        let newScore = 0;
        const newSuggestions = [];

        // Basic Info (20%)
        if (resume.fullName) newScore += 5;
        if (resume.email) newScore += 5;
        if (resume.phone) newScore += 5;
        if (resume.location) newScore += 5;
        else newSuggestions.push("Add your location");

        // Summary (15%)
        if (resume.summary && resume.summary.length > 50) newScore += 15;
        else newSuggestions.push("Add a professional summary (50+ chars)");

        // Experience (35%)
        if (resume.experience.length > 0) {
            newScore += 15;
            if (resume.experience.length >= 2) newScore += 10;

            const hasDetailedExp = resume.experience.every((exp: any) => exp.description && exp.description.length > 30);
            if (hasDetailedExp) newScore += 10;
            else newSuggestions.push("Add more details to your experience descriptions");
        } else {
            newSuggestions.push("Add at least one work experience");
        }

        // Education (15%)
        if (resume.education.length > 0) newScore += 15;
        else newSuggestions.push("Add your educational background");

        // Skills (15%)
        if (resume.skills.length >= 5) newScore += 15;
        else newSuggestions.push("Add at least 5 key skills");

        setScore(newScore);
        setSuggestions(newSuggestions);
    };

    const getColor = () => {
        if (score < 50) return '#EF4444';
        if (score < 80) return '#F59E0B';
        return '#27AE60';
    };

    return (
        <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            marginBottom: '20px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <TrendingUp size={18} /> Resume Strength
                </h3>
                <span style={{ fontSize: '20px', fontWeight: 800, color: getColor() }}>{score}%</span>
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '4px', marginBottom: '16px', overflow: 'hidden' }}>
                <div style={{
                    width: `${score}%`,
                    height: '100%',
                    background: getColor(),
                    transition: 'width 0.5s ease-out'
                }} />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 ? (
                <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', marginBottom: '8px' }}>Improve your score:</p>
                    <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#475569' }}>
                        {suggestions.slice(0, 3).map((s, i) => (
                            <li key={i} style={{ marginBottom: '4px' }}>{s}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#27AE60', fontWeight: 600 }}>
                    <CheckCircle size={16} /> Great job! Your resume looks strong.
                </div>
            )}
        </div>
    );
};
