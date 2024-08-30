import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const defaultPage = `# Heading (H1 Size)
## Subheading (H2 Size)

Here is a [link](https://www.freecodecamp.org).

This is some \`inline code\`.
Heres some code, <div></div>, between 2 divs.

\`\`\`
Here is a code block
function anotherExample(firstLine, lastLine) {
  if (firstLine == '' && lastLine == '') {
    return multiLineCode;
  }
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote.

![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

This text is bolded
`;


  const [text, setText] = useState(defaultPage);

  const textChanged = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea 
        id="editor" 
        onChange={textChanged} 
        value={text} 
      />
      <div 
        id="preview" 
        dangerouslySetInnerHTML={{ __html: marked(text) }} 
      />
    </div>  
  );
}

export default App;
