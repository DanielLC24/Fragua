import { useMemo, useState } from 'react'
import { Search, Bell, ChevronDown, SlidersHorizontal, ArrowRight, Sparkles, Menu, Check } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import { projects } from './data/projects.js'

const filters = ['Todos', 'Desarrollo', 'Diseño', 'Marketing']

export default function App() {
  const [page, setPage] = useState('Proyectos')
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [query, setQuery] = useState('')
  const [saved, setSaved] = useState([])
  const [applied, setApplied] = useState([])
  const [selected, setSelected] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showApplied, setShowApplied] = useState(false)

  const visibleProjects = useMemo(() => projects.filter(project => {
    const matchesFilter = activeFilter === 'Todos' || project.category === activeFilter
    const matchesQuery = `${project.title} ${project.company} ${project.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase())
    const matchesApplied = !showApplied || applied.includes(project.id)
    return matchesFilter && matchesQuery && matchesApplied
  }), [activeFilter, query, applied, showApplied])

  function toggleSaved(id) { setSaved(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]) }
  function applyToProject(id) { setApplied(current => current.includes(id) ? current : [...current, id]) }

  return <div className="app-shell">
    <Sidebar page={page} setPage={(next) => { setPage(next); setShowApplied(next === 'Mi trabajo') }} open={sidebarOpen} setOpen={setSidebarOpen}/>
    <main className="main-area">
      <header className="topbar"><div className="topbar-left"><button className="mobile-menu" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Menú"><Menu size={20}/></button><span className="breadcrumb">Workspace</span><span className="breadcrumb-slash">/</span><strong>{page === 'Proyectos' ? 'Explorar proyectos' : page}</strong></div><div className="topbar-right"><button className="icon-button notification-button" aria-label="Notificaciones"><Bell size={18}/><i/></button><div className="topbar-divider"/><button className="top-profile"><div className="avatar avatar-lilac">AR</div><ChevronDown size={15}/></button></div></header>
      <div className="page-content">
        {page === 'Proyectos' || page === 'Mi trabajo' ? <>
          <section className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-line"/> TU SIGUIENTE PASO EMPIEZA AQUÍ</div><h1>{showApplied ? 'Tu camino en marcha.' : 'Aprende haciendo.'}</h1><p>{showApplied ? 'Sigue el estado de los proyectos a los que te postulaste.' : 'Proyectos reales, mentoría cercana y experiencia que sí cuenta.'}</p></div><div className="welcome-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✦</div><div className="art-spark spark-three">·</div><div className="art-core"><Sparkles size={31}/></div><span className="art-label">CRECE EN PROYECTOS REALES</span></div></section>
          {!showApplied && <section className="journey-banner"><div className="journey-icon"><Sparkles size={17}/></div><div className="journey-copy"><strong>Tu experiencia empieza con un proyecto.</strong><span>Aplica, colabora con un equipo y construye algo que puedas mostrar.</span></div><button onClick={() => document.getElementById('project-list')?.scrollIntoView({behavior:'smooth'})}>Encuentra tu proyecto <ArrowRight size={15}/></button></section>}
          <section className="projects-section" id="project-list"><div className="section-heading"><div><div className="heading-title-row"><h2>{showApplied ? 'Mis postulaciones' : 'Proyectos para ti'}</h2><span className="result-count">{visibleProjects.length}</span></div><p>Oportunidades seleccionadas para que desarrolles nuevas habilidades.</p></div><button className="sort-button"><SlidersHorizontal size={15}/> Más recientes <ChevronDown size={14}/></button></div>
            <div className="filter-toolbar"><div className="filter-tabs">{filters.map(filter => <button key={filter} className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)}>{filter}{activeFilter === filter && <span className="filter-indicator"/>}</button>)}</div><label className="search-box"><Search size={16}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar proyectos o habilidades"/><kbd>⌘ K</kbd></label></div>
            <div className="project-grid">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} saved={saved.includes(project.id)} onSave={toggleSaved} onOpen={setSelected}/>)}</div>
            {visibleProjects.length === 0 && <div className="empty-state"><div><Search size={20}/></div><strong>No encontramos proyectos</strong><p>Prueba otra búsqueda o cambia los filtros.</p><button onClick={() => {setQuery('');setActiveFilter('Todos')}}>Limpiar filtros</button></div>}
            {!showApplied && <div className="load-more"><span>Mostrando {visibleProjects.length} de 12 proyectos</span><button>Ver todos los proyectos <ArrowRight size={15}/></button></div>}
          </section>
          {!showApplied && <section className="bottom-note"><div className="bottom-note-icon"><Check size={16}/></div><span>Todos los proyectos incluyen <strong>mentor asignado</strong> y retroalimentación para tu portafolio.</span><button aria-label="Más información">Más información</button></section>}
        </> : <section className="coming-soon"><div className="coming-icon"><Sparkles size={21}/></div><span className="eyebrow">FRAGUA · TU ESPACIO</span><h1>{page}</h1><p>Estamos preparando este espacio para que puedas mostrar tu crecimiento y todo lo que has construido.</p><button onClick={() => setPage('Proyectos')}>Explorar proyectos <ArrowRight size={15}/></button></section>}
      </div>
    </main>
    <ProjectModal project={selected} onClose={() => setSelected(null)} applied={selected ? applied.includes(selected.id) : false} onApply={(id) => applyToProject(id)}/>
  </div>
}
