/* @ds-bundle: {"format":4,"namespace":"SunbirdNewsletterDesignSystem_cf1a7e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"EmailShell","sourcePath":"components/newsletter/EmailShell.jsx"},{"name":"Footer","sourcePath":"components/newsletter/Footer.jsx"},{"name":"Masthead","sourcePath":"components/newsletter/Masthead.jsx"},{"name":"Quote","sourcePath":"components/newsletter/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/newsletter/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/newsletter/StatBlock.jsx"},{"name":"StoryItem","sourcePath":"components/newsletter/StoryItem.jsx"},{"name":"TaglineStrip","sourcePath":"components/newsletter/TaglineStrip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fdc4790b023c","components/core/Button.jsx":"24f8bac3232c","components/core/Callout.jsx":"d4ee8ca5d2f6","components/core/Card.jsx":"f1d5dee77d27","components/core/Divider.jsx":"576c24196261","components/newsletter/EmailShell.jsx":"cd927726b164","components/newsletter/Footer.jsx":"4a72dec68816","components/newsletter/Masthead.jsx":"22c0e543c42e","components/newsletter/Quote.jsx":"6bcc2039b0cf","components/newsletter/SectionHeading.jsx":"e4fe4c79bb80","components/newsletter/StatBlock.jsx":"7b3a5b1b6c77","components/newsletter/StoryItem.jsx":"a6b4334fcaef","components/newsletter/TaglineStrip.jsx":"185e897a3702","ui_kits/newsletter/ArchiveScreen.jsx":"e16441661867","ui_kits/newsletter/IssueScreen.jsx":"f44d5a564594","ui_kits/newsletter/SubscribeScreen.jsx":"56370ebd262a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SunbirdNewsletterDesignSystem_cf1a7e = window.SunbirdNewsletterDesignSystem_cf1a7e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  clay: {
    background: 'var(--clay-400)',
    color: 'var(--paper-0)'
  },
  marigold: {
    background: 'var(--marigold-300)',
    color: 'var(--clay-500)'
  },
  sky: {
    background: 'var(--sky-300)',
    color: 'var(--paper-0)'
  },
  vermilion: {
    background: 'var(--vermilion-400)',
    color: 'var(--paper-0)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--clay-400)',
    boxShadow: 'inset 0 0 0 1px var(--clay-400)'
  }
};
function Badge({
  tone = 'marigold',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-2)',
  font: 'var(--fw-semibold) var(--fs-small)/1 var(--font-display)',
  letterSpacing: '0.01em',
  borderRadius: 'var(--radius-button)',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)'
};
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--fs-eyebrow)'
  },
  md: {
    padding: '12px 24px'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--fs-body)'
  }
};
const variants = {
  primary: {
    background: 'var(--clay-400)',
    color: 'var(--paper-0)',
    borderColor: 'var(--clay-400)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--clay-400)',
    borderColor: 'var(--clay-400)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-link)',
    borderColor: 'transparent',
    padding: '8px 0',
    borderRadius: 'var(--radius-sm)'
  },
  alert: {
    background: 'var(--vermilion-400)',
    color: 'var(--paper-0)',
    borderColor: 'var(--vermilion-400)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled,
  iconAfter,
  children,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    style: s
  }, rest), children, iconAfter ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.1em',
      lineHeight: 0
    }
  }, iconAfter) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Callout({
  label,
  tone = 'marigold',
  children,
  style,
  ...rest
}) {
  const tones = {
    marigold: {
      background: 'var(--marigold-100)',
      border: '1px solid var(--marigold-200)',
      color: 'var(--clay-500)'
    },
    sky: {
      background: 'var(--sky-100)',
      border: '1px solid var(--sky-200)',
      color: 'var(--sky-500)'
    },
    vermilion: {
      background: 'var(--vermilion-100)',
      border: '1px solid var(--vermilion-300)',
      color: 'var(--vermilion-500)'
    }
  };
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)',
      ...tones[tone],
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'inherit'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  paper: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-hairline)'
  },
  marigold: {
    background: 'var(--marigold-100)',
    color: 'var(--clay-500)',
    border: '1px solid var(--marigold-200)'
  },
  clay: {
    background: 'var(--clay-400)',
    color: 'var(--paper-0)',
    border: '1px solid var(--clay-400)'
  },
  sky: {
    background: 'var(--sky-100)',
    color: 'var(--sky-500)',
    border: '1px solid var(--sky-200)'
  },
  vermilion: {
    background: 'var(--vermilion-400)',
    color: 'var(--paper-0)',
    border: '1px solid var(--vermilion-400)'
  }
};
function Card({
  tone = 'paper',
  raised = false,
  padding = 'var(--space-5)',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: raised ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Constellation rule: the dotted path + node motif taken from the Sunbird deck backgrounds. */
function Divider({
  variant = 'rule',
  nodes = 3,
  style,
  ...rest
}) {
  if (variant === 'rule') {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: 0,
        borderTop: 'var(--rule-thickness) solid var(--border-rule)',
        margin: 0,
        opacity: 0.5,
        ...style
      }
    }, rest));
  }
  if (variant === 'hairline') {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: 0,
        borderTop: '1px solid var(--border-hairline)',
        margin: 0,
        ...style
      }
    }, rest));
  }
  const palette = ['var(--node-a)', 'var(--node-b)', 'var(--node-c)', 'var(--node-d)'];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: '2px dotted var(--ochre-300)'
    }
  }), Array.from({
    length: nodes
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8 + i % 2 * 4,
      height: 8 + i % 2 * 4,
      borderRadius: 'var(--radius-node)',
      background: palette[i % palette.length]
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: '2px dotted var(--ochre-300)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/EmailShell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centres an issue on the warm desk background at the 640px email measure. */
function EmailShell({
  preheader,
  flat = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card-muted)',
      padding: 'var(--space-7) var(--space-4)',
      minHeight: '100%',
      ...style
    }
  }, rest), preheader ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      maxWidth: 'var(--email-width)',
      margin: '0 auto var(--space-4)'
    }
  }, preheader) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--email-width)',
      margin: '0 auto',
      background: 'var(--surface-card)',
      borderRadius: flat ? 0 : 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: flat ? 'none' : 'var(--shadow-raised)',
      border: flat ? '1px solid var(--border-hairline)' : 'none'
    }
  }, children));
}
Object.assign(__ds_scope, { EmailShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/EmailShell.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/Masthead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Issue masthead: marigold band, sunbird wordmark, issue meta, headline. */
function Masthead({
  title,
  issue,
  date,
  kicker,
  logoSrc = '../../assets/sunbird-wordmark-alpha.png',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--space-7) var(--email-gutter) var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Sunbird",
    style: {
      height: 34,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--clay-500)',
      textAlign: 'right'
    }
  }, issue, issue && date ? ' · ' : '', date)), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--clay-400)',
      opacity: 0.35,
      margin: 'var(--space-5) 0'
    }
  }), kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--clay-500)',
      marginBottom: 'var(--space-3)'
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-bold) var(--fs-display-2)/var(--lh-tight) var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-display)',
      margin: 0
    }
  }, title));
}
Object.assign(__ds_scope, { Masthead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/Masthead.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  attribution,
  role,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--fw-medium) var(--fs-h2)/1.35 var(--font-display)',
      letterSpacing: 'var(--ls-heading)',
      textWrap: 'pretty'
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)',
      opacity: 0.85
    }
  }, attribution, role ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      opacity: 0.75
    }
  }, role) : null) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/Quote.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  dot = 'var(--node-a)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-node)',
      background: dot
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, eyebrow)) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  stats = [],
  columns = 3,
  style,
  ...rest
}) {
  const palette = ['var(--node-a)', 'var(--node-b)', 'var(--node-c)', 'var(--node-d)'];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-node)',
      background: palette[i % palette.length],
      marginBottom: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-h1)/1.05 var(--font-display)',
      color: 'var(--text-display)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)',
      color: 'var(--text-body)',
      marginTop: 'var(--space-2)'
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/StoryItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StoryItem({
  eyebrow,
  title,
  excerpt,
  href,
  cta = 'Read more',
  imageSrc,
  imageAlt = '',
  layout = 'stacked',
  style,
  ...rest
}) {
  const media = imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: imageAlt,
    style: {
      display: 'block',
      width: layout === 'side' ? 180 : '100%',
      height: layout === 'side' ? 130 : 200,
      objectFit: 'cover',
      borderRadius: 'var(--radius-card)',
      background: 'var(--surface-card-muted)'
    }
  }) : null;
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: layout === 'side' ? 'row' : 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), media, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ochre-500)',
      marginBottom: 'var(--space-2)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, excerpt), href ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    href: href,
    iconAfter: "\u2192",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, cta) : null));
}
Object.assign(__ds_scope, { StoryItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/StoryItem.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/TaglineStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NODES = ['var(--node-a)', 'var(--node-b)', 'var(--node-d)', 'var(--node-c)'];

/** The attribute strip that closes an issue, strung together like the brand's constellation. */
function TaglineStrip({
  items = ['Open source', 'Modular', 'Scalable', 'Extensible'],
  tone = 'plain',
  style,
  ...rest
}) {
  const tones = {
    clay: {
      background: 'var(--clay-400)',
      color: 'var(--paper-0)',
      padding: 'var(--space-3) var(--space-5)',
      borderRadius: 'var(--radius-pill)'
    },
    marigold: {
      background: 'var(--marigold-300)',
      color: 'var(--clay-500)',
      padding: 'var(--space-3) var(--space-5)',
      borderRadius: 'var(--radius-pill)'
    },
    plain: {
      background: 'transparent',
      color: 'var(--clay-400)',
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...tones[tone],
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      borderTop: '2px dotted currentColor',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: NODES[i % NODES.length]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      borderTop: '2px dotted currentColor',
      opacity: 0.5
    }
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase'
    }
  }, it))));
}
Object.assign(__ds_scope, { TaglineStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/TaglineStrip.jsx", error: String((e && e.message) || e) }); }

// components/newsletter/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  links = [],
  tagline = true,
  maintainer = 'Maintained by COSS · sunbird.gitbook.io/sunbird-spark',
  contactLabel = 'Write to us at info@sunbird.org',
  contactHref = 'mailto:info@sunbird.org',
  signOff = '— Team Sunbird',
  address = 'The Sunbird Collective',
  cossLogoSrc = '../../assets/coss-logo-alpha.png',
  unsubscribeHref = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-card-muted)',
      padding: 'var(--space-7) var(--email-gutter)',
      textAlign: 'center',
      ...style
    }
  }, rest), tagline ? /*#__PURE__*/React.createElement(__ds_scope.TaglineStrip, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }) : null, cossLogoSrc ? /*#__PURE__*/React.createElement("img", {
    src: cossLogoSrc,
    alt: "Centre for Open Societal Systems",
    style: {
      height: 92,
      width: 'auto',
      margin: '0 auto var(--space-4)',
      display: 'block'
    }
  }) : null, maintainer ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-4)'
    }
  }, maintainer) : null, contactLabel ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-semibold) var(--fs-body)/1.4 var(--font-display)',
      margin: '0 0 var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: contactHref,
    style: {
      color: 'var(--text-link)',
      textDecoration: 'none'
    }
  }, contactLabel)) : null, signOff ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body)/1.4 var(--font-text)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-5)'
    }
  }, signOff) : null, links.length ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      font: 'var(--fw-semibold) var(--fs-small)/1 var(--font-display)',
      color: 'var(--text-link)',
      textDecoration: 'none'
    }
  }, l.label))) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, address, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: unsubscribeHref,
    style: {
      color: 'var(--text-muted)'
    }
  }, "Unsubscribe"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "https://sunbird.org",
    style: {
      color: 'var(--text-muted)'
    }
  }, "sunbird.org")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/newsletter/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/ArchiveScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Divider,
  Button
} = window.SunbirdNewsletterDesignSystem_cf1a7e;
const issues = [{
  n: 'July 2026',
  d: 'Edition · July 2026',
  t: 'What will you spark?',
  s: 'Sunbird Spark v1.0.2, personalization, and AI at the core.',
  tone: 'marigold'
}, {
  n: 'April 2026',
  d: 'Edition · April 2026',
  t: 'Two billion certificates later',
  s: 'DIVOC across five countries, and the offline problem it solved.',
  tone: 'paper'
}, {
  n: 'January 2026',
  d: 'Edition · January 2026',
  t: 'Forty states, one platform',
  s: 'How DIKSHA got adopted board by board.',
  tone: 'paper'
}, {
  n: 'October 2025',
  d: 'Edition · October 2025',
  t: 'Why a collective',
  s: 'Shared values, shared concerns, exponential change.',
  tone: 'paper'
}];
function ArchiveScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card-muted)',
      padding: 'var(--space-7) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--email-width)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--clay-400)',
      marginBottom: 'var(--space-2)'
    }
  }, "Sunbird Newsletter"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      color: 'var(--text-display)',
      margin: 0
    }
  }, "Every edition, in order")), /*#__PURE__*/React.createElement(Divider, {
    variant: "constellation",
    nodes: 3
  }), issues.map(i => /*#__PURE__*/React.createElement(Card, {
    key: i.n,
    tone: i.tone,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      cursor: 'pointer'
    },
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 116px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: i.tone === 'marigold' ? 'clay' : 'marigold'
  }, i.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-heading)'
    }
  }, i.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'inherit',
      opacity: 0.9
    }
  }, i.s), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-2)'
    }
  }, i.d)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onOpen,
    style: {
      alignSelf: 'flex-start'
    }
  }, "Open latest edition")));
}
Object.assign(window, {
  ArchiveScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/ArchiveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/IssueScreen.jsx
try { (() => {
const {
  EmailShell,
  Masthead,
  SectionHeading,
  Footer,
  Divider,
  Button
} = window.SunbirdNewsletterDesignSystem_cf1a7e;
const updates = [{
  t: 'Personalized Learning Journeys & Competency Frameworks',
  d: 'Spark will be able to assess a learner against a defined set of skills, pinpoint exactly which competencies they’re missing, and build a learning journey to close those gaps. The design work is in progress, and build will commence shortly. Once a competency framework is mapped to Sunbird’s taxonomy, Spark will automatically recommend the right content to help learners reach each competency — no manual curation needed.',
  dot: 'var(--node-a)',
  size: 18
}, {
  t: 'Richer, More Flexible Assessments',
  d: 'QuML assessments now support all question types — Fill in the Blanks, Match the Following, Sequence Ordering, and Reordering — both online and offline — plus a new True/False question type. Authors can also save questions in any of four supported languages (English, Arabic, French, Spanish) by default. The Collection, Generic/Upload and QuML editors have been rebuilt in React, with expanded Arabic, French and Portuguese support and full right-to-left layout.',
  dot: 'var(--node-b)',
  size: 12
}, {
  t: 'AI at the Core',
  d: 'Spark has enabled MCP integration, providing a standard way to connect with AI tools and agents. We are building out the AI pipeline as core infrastructure — the backbone for running AI jobs at scale — with the initial set of AI jobs enabling automated caption and transcript generation as well as configurable metadata generation and tagging.',
  dot: 'var(--node-c)',
  size: 16
}, {
  t: 'Under the Hood',
  d: 'v1.0.2 also strengthened the platform’s foundations: a new on-demand tool lets operators refresh search indexes without redeploying the system, and 43 security vulnerabilities tied to component upgrades were resolved across the platform — keeping Spark reliable and secure for every deployment.',
  dot: 'var(--node-d)',
  size: 12
}];
function IssueScreen() {
  return /*#__PURE__*/React.createElement(EmailShell, {
    flat: true,
    preheader: "Sunbird Newsletter \u2014 Edition \xB7 July 2026"
  }, /*#__PURE__*/React.createElement(Masthead, {
    title: "Sunbird Newsletter",
    issue: "Edition",
    date: "July 2026",
    logoSrc: "../../assets/sunbird-wordmark-alpha.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--email-gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Spotlight",
    title: "Sunbird Spark",
    dot: "var(--node-a)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-text)',
      color: 'var(--text-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Sunbird Ed (the DPG for learning, skilling and capacity building) has evolved to its newest version \u2014 Sunbird Spark. Spark offers best-in-class DPG capabilities for the learning and skilling domains, in an efficient shape and form for all classes of adopters, while retaining the extensibility, scalability and reliability of Sunbird Ed \u2014 the core DPG that powered DIKSHA in India.")), /*#__PURE__*/React.createElement(Divider, {
    variant: "constellation",
    nodes: 3
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Product update",
    title: "What Will You Spark?",
    dot: "var(--node-b)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "A quick look at what\u2019s new in Sunbird Spark, and what\u2019s coming next:"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Sunbird Spark just shipped v1.0.2 (8 July 2026), and the roadmap for the next two months adds further depth on personalization and AI.")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, updates.map((u, i) => /*#__PURE__*/React.createElement("li", {
    key: u.t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 22px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: u.size,
      height: u.size,
      borderRadius: '50%',
      background: u.dot,
      marginTop: 6,
      flex: '0 0 auto'
    }
  }), i < updates.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderLeft: '2px dotted var(--ochre-300)',
      marginTop: 6
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < updates.length - 1 ? 'var(--space-6)' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      borderTop: '2px dotted var(--ochre-300)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, u.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)',
      color: 'var(--text-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, u.d)))))), /*#__PURE__*/React.createElement(Divider, {
    variant: "constellation",
    nodes: 3
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Take a look at the Sunbird Spark microsite to know more."), /*#__PURE__*/React.createElement(Button, {
    href: "https://sunbird.gitbook.io/sunbird-spark",
    iconAfter: "\u2192"
  }, "Sunbird Spark microsite"), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Join the collective",
    title: "Partnership opportunities abound",
    dot: "var(--node-d)",
    style: {
      marginTop: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "As Spark continues its evolution \u2014 responding to market needs and integrating newer capabilities \u2014 we look to the community for inspiration and involvement. Partnership opportunities abound, and the team is looking forward to exciting collaborations!"))), /*#__PURE__*/React.createElement(Footer, {
    links: [],
    cossLogoSrc: "../../assets/coss-logo-alpha.png"
  }));
}
Object.assign(window, {
  IssueScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/IssueScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/SubscribeScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Divider,
  Badge
} = window.SunbirdNewsletterDesignSystem_cf1a7e;
const {
  useState
} = React;
function SubscribeScreen() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--space-9) var(--space-4)',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sunbird-wordmark-alpha.png",
    alt: "Sunbird",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-bold) var(--fs-display-2)/var(--lh-tight) var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-display)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Sunbird Newsletter, straight to your inbox."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-text)',
      color: 'var(--clay-500)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, "Editions from Team Sunbird: what shipped, what is coming next, and how to get involved."), done ? /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sky"
  }, "Confirmed"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-heading)',
      marginTop: 'var(--space-3)'
    }
  }, "You are on the list"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)'
    }
  }, "The next edition goes to ", email, ". You can reply to any edition.")) : /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      width: '100%'
    },
    onSubmit: e => {
      e.preventDefault();
      if (email) setDone(true);
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@organisation.org",
    "aria-label": "Email address",
    style: {
      flex: 1,
      padding: '14px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--clay-400)',
      background: 'var(--paper-0)',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Subscribe")), /*#__PURE__*/React.createElement(Divider, {
    variant: "constellation",
    nodes: 4,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)',
      color: 'var(--clay-500)'
    }
  }, "Read past editions in the archive. Unsubscribe in one click, always.")));
}
Object.assign(window, {
  SubscribeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/SubscribeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.EmailShell = __ds_scope.EmailShell;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Masthead = __ds_scope.Masthead;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StoryItem = __ds_scope.StoryItem;

__ds_ns.TaglineStrip = __ds_scope.TaglineStrip;

})();
