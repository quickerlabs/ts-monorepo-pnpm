# TS Monorepo


## Commands Usage
> Usually, in a monorepo you want to run commands from the root of the repository to not have to constantly switch between folders. PNPM workspaces have a way to do that, by passing a filter argument, like:

- pnpm --filter <package-name> <command>
```bash
pnpm --filter remix-demo dev
```

# Consuming our meta-ui package from the Remix app

> Our meta-ui library is ready so we can use it in the Remix application hosted within the apps folder of our repository. We can either manually add the dependency to Remix's package.json or use PNPM to add it:

```bash
pnpm add @quickui/meta-ui --filter remix-demo --workspace
```