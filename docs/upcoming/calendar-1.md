
# Calendar

Calendar has days, years, months and everything between. Yay! t

---

## Interactive demo

This demo lets you previetew the button component, its variations, and configuration options. Each tab displays a different type of button.

## Calendar

With this mode, we can render component in nice fullscreen mode.

```javascript  
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Component() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}  
```