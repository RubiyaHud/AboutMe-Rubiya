## React icons
1. Go to the Link below:
   [React Icons](https://react-icons.github.io/react-icons/)
2. Open terminal ` ctrl + ` `tilda or back tick ` in VS Code and type the code below:
   ```
   npm install react-icons --save
   ```
3. Select icon and import the icon component where needed, for example:
   ```
   import { FaBeer } from 'react-icons/fa';

   class Question extends React.Component {
     render() {
    return <h3> Lets go for a <FaBeer />? </h3>
     }
   }
   ```
   
