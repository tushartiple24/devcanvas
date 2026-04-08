import html2canvas from 'html2canvas';

export default function ExportButton({ targetId, nodes, edges }) {

  // html2canvas options for better export
  const html2canvasOptions = {
    backgroundColor: '#181e2a', // fallback for dark mode
    useCORS: true,
    scale: window.devicePixelRatio || 2,
    logging: false,
    // You can add more options if needed
  };

  const handleExportPNG = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;
    const canvas = await html2canvas(element, html2canvasOptions);
    const link = document.createElement('a');
    link.download = 'canvas-export.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleExportJPEG = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;
    const canvas = await html2canvas(element, html2canvasOptions);
    const link = document.createElement('a');
    link.download = 'canvas-export.jpeg';
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify({ nodes, edges }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'canvas-export.json';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleExportPNG} className="p-2 bg-slate-800 text-white rounded">Export PNG</button>
      <button onClick={handleExportJPEG} className="p-2 bg-slate-800 text-white rounded">Export JPEG</button>
      <button onClick={handleExportJSON} className="p-2 bg-slate-800 text-white rounded">Export JSON</button>
    </div>
  );
}
