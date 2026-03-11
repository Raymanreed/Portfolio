import { useState } from 'react';
import { pdfjs, Document, Page } from "react-pdf";
import resume from '../assets/ReedGehlingResume2026.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function BasePage() {
    const [displayResume, setDisplayResume] = useState<Boolean>(false);

    return (
        <>
            <h2>This is the base page</h2>
            <div onClick={() => {setDisplayResume(!displayResume)}}>
                {!displayResume ? 'View Resume' : 'Hide'}
            </div>
            {!displayResume ? <></> :
                <div>
                    <Document file={resume} className={"resume-renderContainer"}>       
                        <Page 
                            className={"resume-main-view"}
                            pageNumber={1}
                            width={600}
                            renderTextLayer={false}
                        />             
                    </Document>
                </div>
            }
            <a href={resume} download>Download</a>
        </>
    )
}

export default BasePage;