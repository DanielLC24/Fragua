import { ArrowUpRight, Bookmark, Clock3, UsersRound } from 'lucide-react'

export default function ProjectCard({ project, saved, onSave, onOpen }) {
  return <article className="project-card">
    <div className="card-top"><div className={`company-logo ${project.tone}`}>{project.initials}</div><button className={`save-button ${saved ? 'saved' : ''}`} onClick={() => onSave(project.id)} aria-label={saved ? 'Quitar guardado' : 'Guardar proyecto'}><Bookmark size={17} fill={saved ? 'currentColor' : 'none'} /></button></div>
    <div className="company-name">{project.company}<span className="verified">✓</span><span className="dot-sep">·</span><span>{project.category}</span></div>
    <h3>{project.title}</h3><p className="project-description">{project.description}</p>
    <div className="skill-list">{project.skills.map(skill => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
    <div className="project-meta"><span><Clock3 size={15}/>{project.duration}</span><span><UsersRound size={15}/>{project.spots} lugares</span><span className="level-pill">{project.level}</span></div>
    <div className="card-footer"><div className="mentor-avatar">{project.mentor.split(' ').map(n => n[0]).join('')}</div><span>Con <strong>{project.mentor}</strong></span><button className="card-link" onClick={() => onOpen(project)}>Ver proyecto <ArrowUpRight size={15}/></button></div>
  </article>
}
