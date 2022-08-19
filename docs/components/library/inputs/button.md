
# Button

---

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Dialogs

- Modal windows

- Forms

- Cards

- Toolbars

## Contained Buttons

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.

```javascript  
Mode:SANDBOX 
Horizontal:center 
Vertical:center
Height:300
---
"react": "17.0.2"
"react-dom": "17.0.2"
"react-scripts": "4.0.0"
"@material-ui/core": "4.12.2"
---

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}  
```

## Text buttons

Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.

```javascript  
Mode:SANDBOX 
Horizontal:center 
Vertical:center
Height:300
---
"react": "17.0.2"
"react-dom": "17.0.2"
"react-scripts": "4.0.0"
"@material-ui/core": "4.12.2"
---

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
    </div>
  );
}  
```