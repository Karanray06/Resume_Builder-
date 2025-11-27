import React from 'react';
import { Mail, Phone, MapPin, Globe, Download, Share2, ArrowLeft } from 'lucide-react';

interface WebProfileProps {
    resume: any;
    onBack: () => void;
}

export const WebProfile: React.FC<WebProfileProps> = ({ resume, onBack }) => {
    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
            <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .skill-tag { 
          background: white; padding: 8px 16px; border-radius: 20px; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.05); font-weight: 500; color: #2C3E50;
          border: 1px solid #E2E8F0;
        }
      `}</style>

            {/* Navigation */}
            <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, color: '#64748B' }}>
                    <ArrowLeft size={20} /> Back to Editor
                </button>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{ padding: '10px 20px', background: '#2C3E50', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Share2 size={16} /> Share
                    </button>
                    <button style={{ padding: '10px 20px', background: 'white', color: '#2C3E50', border: '1px solid #E2E8F0', borderRadius: '20px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Download size={16} /> PDF
                    </button>
                </div>
            </nav>

            {/* Header / Hero */}
            <header style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center', background: 'white' }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #3498DB, #2C3E50)', borderRadius: '50%', margin: '0 auto 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', color: 'white', fontWeight: 700 }}>
                        {resume.fullName.charAt(0)}
                    </div>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#1E293B', marginBottom: '16px' }}>{resume.fullName}</h1>
                    <p style={{ fontSize: '24px', color: '#3498DB', fontWeight: 600, marginBottom: '32px' }}>{resume.title}</p>
                    <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, marginBottom: '40px' }}>{resume.summary}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', color: '#475569' }}>
                        {resume.email && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={18} /> {resume.email}</div>}
                        {resume.phone && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={18} /> {resume.phone}</div>}
                        {resume.location && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> {resume.location}</div>}
                        {resume.website && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={18} /> {resume.website}</div>}
                    </div>
                </div>
            </header>

            {/* Content */}
            <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 20px', display: 'grid', gap: '80px' }}>

                {/* Experience */}
                <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1E293B', marginBottom: '40px', textAlign: 'center' }}>Experience</h2>
                    <div style={{ display: 'grid', gap: '32px' }}>
                        {resume.experience.map((exp: any) => (
                            <div key={exp.id} style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <div>
                                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1E293B' }}>{exp.jobTitle}</h3>
                                        <p style={{ fontSize: '16px', color: '#3498DB', fontWeight: 600 }}>{exp.company}</p>
                                    </div>
                                    <span style={{ background: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#64748B' }}>
                                        {exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate}
                                    </span>
                                </div>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6 }}>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1E293B', marginBottom: '40px', textAlign: 'center' }}>Education</h2>
                    <div style={{ display: 'grid', gap: '24px' }}>
                        {resume.education.map((edu: any) => (
                            <div key={edu.id} style={{ background: 'white', padding: '24px', borderRadius: '16px', borderLeft: '4px solid #3498DB', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1E293B' }}>{edu.degree} in {edu.field}</h3>
                                <p style={{ fontSize: '16px', color: '#64748B', marginTop: '4px' }}>{edu.school} • {edu.startDate} - {edu.endDate}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1E293B', marginBottom: '40px', textAlign: 'center' }}>Skills</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
                        {resume.skills.map((skill: string, i: number) => (
                            <span key={i} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </section>

            </main>

            <footer style={{ background: '#1E293B', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
                <p style={{ opacity: 0.6 }}>© 2025 {resume.fullName}. All rights reserved.</p>
            </footer>
        </div>
    );
};
