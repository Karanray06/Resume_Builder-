import React, { useState } from 'react';
import { Search, CheckCircle, AlertTriangle, X } from 'lucide-react';

interface JobMatcherProps {
    resume: any;
    isOpen: boolean;
    onClose: () => void;
}

export const JobMatcher: React.FC<JobMatcherProps> = ({ resume, isOpen, onClose }) => {
    const [jobDescription, setJobDescription] = useState('');
    const [matchScore, setMatchScore] = useState<number | null>(null);
    const [missingKeywords, setMissingKeywords] = useState<string[]>([]);

    if (!isOpen) return null;

    const analyzeMatch = () => {
        if (!jobDescription.trim()) return;

        const resumeText = JSON.stringify(resume).toLowerCase();
        const jdText = jobDescription.toLowerCase();

        // Simple keyword extraction (mock logic for demo)
        const commonKeywords = ['react', 'javascript', 'typescript', 'node.js', 'python', 'java', 'sql', 'aws', 'docker', 'agile', 'communication', 'leadership'];
        const jdKeywords = commonKeywords.filter(k => jdText.includes(k));

        const found = jdKeywords.filter(k => resumeText.includes(k));
        const missing = jdKeywords.filter(k => !resumeText.includes(k));

        const score = jdKeywords.length > 0 ? Math.round((found.length / jdKeywords.length) * 100) : 0;

        setMatchScore(score);
        setMissingKeywords(missing);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                background: 'white',
                width: '600px',
                maxHeight: '80vh',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <X size={24} color="#64748B" />
                </button>

                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>Job Description Matcher</h2>
                <p style={{ color: '#64748B', marginBottom: '24px' }}>Paste a job description to see how well your resume matches.</p>

                <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste job description here..."
                    style={{
                        width: '100%',
                        height: '150px',
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                        marginBottom: '20px',
                        resize: 'none',
                        fontSize: '14px'
                    }}
                />

                <button
                    onClick={analyzeMatch}
                    style={{
                        background: '#3498DB',
                        color: 'white',
                        padding: '12px',
                        borderRadius: '8px',
                        border: 'none',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}
                >
                    <Search size={18} /> Analyze Match
                </button>

                {matchScore !== null && (
                    <div style={{ marginTop: '24px', padding: '20px', background: '#F8FAFC', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <span style={{ fontWeight: 600, color: '#1E293B' }}>Match Score</span>
                            <span style={{ fontSize: '24px', fontWeight: 800, color: matchScore > 70 ? '#27AE60' : '#F59E0B' }}>{matchScore}%</span>
                        </div>

                        {missingKeywords.length > 0 ? (
                            <div>
                                <p style={{ fontSize: '13px', fontWeight: 600, color: '#EF4444', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <AlertTriangle size={14} /> Missing Keywords
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {missingKeywords.map(k => (
                                        <span key={k} style={{ background: '#FEF2F2', color: '#EF4444', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', border: '1px solid #FECACA' }}>
                                            {k}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div style={{ color: '#27AE60', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                                <CheckCircle size={18} /> Perfect Match!
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
