import React from 'react'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Editor, { useMonaco } from '@monaco-editor/react';

function CodeEditor() {
  const monaco = useMonaco();

  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);

  return <Editor height="calc(100% - 40px)  " defaultValue="// some comment" defaultLanguage="javascript" />;
  
}

export default CodeEditor