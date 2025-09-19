import { colors, fontSize, vars } from '@orfium/tokens';

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: vars.color.background.alt,
          padding: vars.spacing.md,
          borderRadius: vars.spacing.sm,
          border: `${vars['border-width'][1]} solid ${vars.color['border-color'].decorative.default}`,
        }}
      >
        <p
          style={{
            color: vars.color.text.default.primary,
            fontFamily: vars.font.sans,
            fontSize: vars['font-size'][3],
          }}
        >
          styled with ictinus css variables
        </p>
      </div>
      <span style={{ color: colors.neutral[4], fontSize: fontSize[2] }}>
        styled with raw tokens
      </span>
    </>
  );
}

export default App;
