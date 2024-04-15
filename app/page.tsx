"use client"
import { useEffect , useState} from "react";
import grapesjs from 'grapesjs';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
// import plugin from 'grapesjs-blocks-basic-extend'; 
import plugin from 'grapesjs-blocks-basic';
import NavBarPlugin from 'grapesjs-navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import pluginTailwind from 'grapesjs-tailwind';
import BeatLoader from 'react-spinners/BeatLoader';


//npm i grapesjs-blocks-bootstrap4


import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import { readFile } from "fs";
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'

function WebBuilder() {



  let [isLoading, setIsLoading] = useState(true);

  
 useEffect(() => {


  

 // check if window is defined (so if in the browser or in node.js).
  if (typeof window === 'undefined') {
  } else {


  

    const escapeName = (name: any) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

  Promise.all([
    fetch('/index.html').then(response => response.text()),
    fetch('/style.css').then(response => response.text())
  ]).then(([html, css]) => {


    // if(editor){
      setIsLoading(false);
    // }
    
    const editor =  grapesjs.init({
          container: '#gjs',
          components:  `
          <div class="container">
            <header>
              <h1>Welcome to My Website</h1>
            </header>
            <main>
              <p>This is a sample paragraph.</p>
            </main>
            <footer>
              <p>Copyright &copy; 2022</p>
            </footer>
          </div>
        `,
    
          style: css,
          height: '700px',
          width: '100%',
          panels: { defaults: [] },
          
          plugins: [ grapesjsPresetWebpage, pluginTailwind ],
         //  pluginsOpts: {
         //    [plugin]: { /* options */ }
         //  },
         canvas: {
          styles: [
            
            // 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
          ],
          scripts: [
            'https://code.jquery.com/jquery-3.3.1.slim.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
            // 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js',
            'https://unpkg.com/grapesjs-tailwind'
          ],
          
        },
          storageManager: {
            id: 'gjs-',
            type: 'local',
            autosave: true,
            // storeComponents: true,
            // storeStyles: true,
            // storeHtml: true,
            // storeCss: true,
          },
          // selectorManager: { escapeName },

          deviceManager: {
            devices:
            [
              {
                id: 'desktop',
                name: 'Desktop',
                width: '',
              },
              {
                id: 'tablet',
                name: 'Tablet',
                width: '768px',
                widthMedia: '992px',
              },
              {
                id: 'mobilePortrait',
                name: 'Mobile portrait',
                width: '320px',
                widthMedia: '575px',
              },
            ]
          },
         //  pluginsOpts: {
         //    'grapesjs-preset-webpage': {
         //      blocksBasicOpts: {
         //        blocks: ['column1', 'column2', 'column3', 'column3-7', 'text',     'link', 'image', 'video'],
         //        flexGrid: 1,
         //      },
         //      blocks: ['link-block', 'quote', 'text-basic'],
         //    },
         //  }
        })


        editor.Panels.addPanel({
          id: 'options',
          el: '.panel__right',
        });
    
        let htm = 
        `
        
        <h1> Hell World</h1>
        
        `

        editor.setComponents(html, { avoidInlineStyle: 1 });
        editor.setStyle(css);
     
editor.Panels.addButton('options', {
  id: 'download-html',
  className: 'fa fa-download',
  command: 'export-template',
  attributes: {  },
  label: '',
tagName: 'span',
  context: 'null',
  buttons: [],
  options: {},
  active: false,
  dragDrop: true,
  togglable: true,
  runDefaultCommand: true,
  stopDefaultCommand: false,
  disable: false,

  // Add the other 6 properties here, set to null or an empty value
});
     
editor.Commands.add('export-template', (editor, sender) => {
  sender && sender.set('active', false);
  let html = editor.getHtml();
  const css = editor.getCss();
  const zip = new JSZip();

  // Add the <html> tag, import the CSS file, and add the Tailwind CSS link
  html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css">
    </head>
    <body>
      ${html}
    </body>
    </html>
  `;

  zip.file('index.html', html);
  if (typeof css === 'string') {
    zip.file('style.css', css);
  }

  zip.generateAsync({ type: 'blob' })
    .then(function(blob) {
      saveAs(blob, 'template.zip');
    });
});



      });

 
    }



 









 },[])

 return (

  
    isLoading ?   <div className="flex items-center align-middle justify-center w-[100vw] h-[100vh]">
      <BeatLoader color="#36d7b7" size={48} />
      </div>  :
  

   <div id="gjs">

    
   </div>
 );
}
export default WebBuilder;