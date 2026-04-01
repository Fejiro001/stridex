# StrideX

## Collaborators:

- Oghenefejiro Stephanie Abere
- Roopjeet Kaur
- Patrick Rukundo

## Description

StrideX is a collaborative team project focused on building a modern, futuristic athletic shopping experience. The goal was to design and develop a highly responsive website that delivers a sleek user interface while maintaining performance across devices.

The website emphasizes clean design, interactive elements, and a cohesive visual style. Each team member was responsible for different sections of the webpage, while ensuring consistency in layout, typography, and overall design system.

## Features

- Responsive design optimized for desktop, tablet, and mobile devices
- Interactive user login modal simulation
- Product overview pop-up with additional shoe details
- Modern hero section with performance statistics
- Cohesive futuristic UI styling
- Interactive UI elements using JavaScript DOM manipulation

## Technologies Used

### Front-end

- HTML5
- CSS
- JavaScript

### Tools/Services

- VS Code
- Git/GitHub

## Key Implementation Details

### Design Consistency

CSS variables were implemented using :root and var() to maintain consistent colors, spacing, and typography throughout the website.

```css
:root {
  --max-width: 1280px;
  --border-radius: 5px;
  --section-padding: 10rem;
  --card-padding: 2rem;
  --grid-gap: 3.2rem;
}
```

### Interactive Elements

JavaScript DOM manipulation was used to create interactive components such as:

- Login modal
- Product overview pop-up
- Clickable UI sections
- Dynamic content display

```js
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
```

## Collaboration & Version Control

One of the main challenges during development was managing Git branches and resolving merge conflicts. Through rebasing and collaborative debugging, the team successfully merged all sections while maintaining design consistency.

This process improved:

- Team collaboration
- Git workflow understanding
- Conflict resolution skills

## Demo

Click [here](https://fejiro001.github.io/stridex/) to demo
