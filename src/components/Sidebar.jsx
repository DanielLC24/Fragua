import { Flame, Compass, BriefcaseBusiness, FolderKanban, UserRound, CircleHelp, Settings, PanelLeftClose } from 'lucide-react'

const nav = [
  { label: 'Inicio', icon: Compass, key: 'Inicio' },
  { label: 'Explorar proyectos', icon: BriefcaseBusiness, key: 'Proyectos', badge: '12' },
  { label: 'Mi trabajo', icon: FolderKanban, key: 'Mi trabajo' },
  { label: 'Mi portafolio', icon: UserRound, key: 'Portafolio' },
]

export default function Sidebar({ page, setPage, open, setOpen }) {
  return <aside className={`sidebar ${open ? '' : 'sidebar-collapsed'}`}>
    <div className="brand-row"><div className="brand-mark"><Flame size={20} fill="currentColor" /></div>{open && <><span className="brand-name">fragua</span><button className="collapse-btn" onClick={() => setOpen(false)} aria-label="Ocultar menú"><PanelLeftClose size={17} /></button></>}</div>
    <div className="workspace-label">{open && 'ESPACIO DE TRABAJO'}</div>
    <nav className="nav-list">{nav.map(({ label, icon: Icon, key, badge }) => <button key={key} className={`nav-item ${page === key ? 'active' : ''}`} onClick={() => setPage(key)} title={!open ? label : undefined}><Icon size={18} strokeWidth={1.8} />{open && <><span>{label}</span>{badge && <small>{badge}</small>}</>}</button>)}</nav>
    <div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><CircleHelp size={17}/></div>{open && <div><strong>¿Primera vez aquí?</strong><span>Conoce cómo funciona</span></div>}</div><button className="nav-item"><Settings size={18}/>{open && <span>Configuración</span>}</button><div className="profile-mini"><div className="avatar avatar-lilac">AR</div>{open && <div className="profile-text"><strong>Andrea Ramírez</strong><span>Talento junior</span></div>}{open && <span className="more-dots">···</span>}</div></div>
  </aside>
}
