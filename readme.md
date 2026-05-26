# Stopwatch ⏱️

A fully functional stopwatch built with HTML, CSS, and JavaScript — featuring a dark mode toggle.

## Features

- Start, Stop, and Reset controls
- Displays time in `MM:SS:ms` format
- Resume from where it was paused
- Dark / Light mode toggle
- Smooth button hover and click animations

## Preview

```
00:00:00
[ Start ] [ Stop ] [ Reset ]
```

## Project Structure

```
stopwatch/
├── index.html
├── style.css
└── script.js
```

## How It Works

### Stopwatch Logic

The stopwatch uses `Date.now()` to track real elapsed time accurately — avoiding the drift that comes from counting `setInterval` ticks.

```javascript
startTime = Date.now() - elapsed; // accounts for paused time
elapsed   = Date.now() - startTime;
```

The display updates every `10ms` to match the centisecond precision of the `MM:SS:ms` format.

### Dark Mode

A CSS checkbox toggle switches between light and dark themes using a single class on `<body>`:

```javascript
document.body.classList.toggle('dark', toggle.checked);
```

```css
body.dark {
  background-color: black;
  color: white;
}
```

## Usage

1. Clone or download the project
2. Open `index.html` in your browser
3. Click **Start** to begin the stopwatch
4. Click **Stop** to pause
5. Click **Start** again to resume from where it stopped
6. Click **Reset** to return to `00:00:00`
7. Use the toggle in the top-right corner to switch between light and dark mode

## Tech Stack

- HTML5
- CSS3 (Flexbox, transitions, pseudo-classes)
- Vanilla JavaScript (no libraries)