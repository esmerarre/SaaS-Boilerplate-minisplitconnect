export const CenteredHero = (props: {
  banner: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttons?: React.ReactNode;
}) => (
  <>
    {props.title && (
      <div className="mt-3 text-center text-5xl font-bold tracking-tight">
        {props.title}
      </div>
    )}

    <div className="mt-6 text-center">{props.banner}</div>

    {props.description && (
      <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
        {props.description}
      </div>
    )}

    {props.buttons && (
      <div className="mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
        {props.buttons}
      </div>
    )}
  </>
);
