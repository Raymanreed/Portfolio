import { pdfjs } from "react-pdf";
import resume from '../assets/ReedGehlingResume2026.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function FooterComponent() {

    return (
        <div className="footer-container">
            <a href={resume} download>View Resume</a>
        </div>
    )
}

export default FooterComponent;