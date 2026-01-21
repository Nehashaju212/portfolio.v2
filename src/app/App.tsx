import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/app/pages/HomePage';
import { ProjectDetail } from '@/app/pages/ProjectDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}