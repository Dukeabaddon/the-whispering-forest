# Graph Report - The-Whispering-Forest---Anime-Landing-Page  (2026-05-22)

## Corpus Check
- 26 files · ~11,034 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 123 nodes · 118 edges · 17 communities (11 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `Token-Efficient Workflow Rules` - 13 edges
3. `scripts` - 6 edges
4. `My Custom Skill` - 3 edges
5. `paths` - 2 edges
6. `NEWS_ITEMS` - 2 edges
7. `CHARACTERS` - 2 edges
8. `LORE_ITEMS` - 2 edges
9. `NewsItem` - 2 edges
10. `Character` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (17 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.16
Nodes (7): LanternProps, CHARACTERS, LORE_ITEMS, NEWS_ITEMS, Character, LoreItem, NewsItem

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (14): Caveman Output Mode, Core Workflow, Debugging Rules, Final Rule, Gate-MCP Rules, Graphifyy Rules, Installation Workflow, Mentor Persona (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (3): Particle, CINEMATIC_SLIDES, TrailerSlide

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (11): dependencies, dotenv, express, @google/genai, lucide-react, motion, react, react-dom (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, clean, dev, lint, preview (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, esbuild, tailwindcss, tsx, @types/express, @types/node, typescript (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.40
Nodes (4): description, majorCapabilities, name, requestFramePermissions

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): How to use this skill, My Custom Skill, Steps & Workflow

## Knowledge Gaps
- **70 isolated node(s):** `name`, `description`, `requestFramePermissions`, `majorCapabilities`, `name` (+65 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 4` to `Community 5`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 6` to `Community 5`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `name`, `description`, `requestFramePermissions` to the rest of the system?**
  _70 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._