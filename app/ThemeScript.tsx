/**
 * Runs before hydration to prevent flash of wrong theme.
 * Inline script in layout sets class on <html> from localStorage or system preference.
 */
export function ThemeScript() {
  const script = `
    (function() {
      var key = 'theme';
      var stored = localStorage.getItem(key);
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var dark = stored === 'dark' || (stored === null && prefersDark);
      if (dark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
