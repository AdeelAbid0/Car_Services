# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Production-Ready Folder Structure for Car Services App

## 📁 Recommended Structure

```
src/
├── 📂 features/                    # Feature-based modules (Domain-driven)
│   ├── 📂 auth/                   # Authentication feature
│   │   ├── 📂 components/         # Auth-specific components
│   │   ├── 📂 pages/              # Auth pages (Login, Register, etc.)
│   │   ├── 📂 hooks/              # Auth-specific hooks
│   │   ├── 📂 services/           # Auth API services
│   │   └── 📂 types/              # Auth TypeScript types
│   ├── 📂 customer/               # Customer feature
│   │   ├── 📂 components/         # Customer-specific components
│   │   ├── 📂 pages/              # Customer pages
│   │   │   ├── 📂 profile/        # Profile management
│   │   │   ├── 📂 booking/        # Booking management
│   │   │   ├── 📂 payment/        # Payment management
│   │   │   └── 📂 services/       # Service browsing
│   │   ├── 📂 hooks/              # Customer-specific hooks
│   │   ├── 📂 services/           # Customer API services
│   │   └── 📂 types/              # Customer TypeScript types
│   ├── 📂 partner/                # Partner feature
│   │   ├── 📂 components/         # Partner-specific components
│   │   ├── 📂 pages/              # Partner pages
│   │   ├── 📂 hooks/              # Partner-specific hooks
│   │   ├── 📂 services/           # Partner API services
│   │   └── 📂 types/              # Partner TypeScript types
│   ├── 📂 superAdmin/             # Super Admin feature
│   │   ├── 📂 components/         # Admin-specific components
│   │   ├── 📂 pages/              # Admin pages
│   │   ├── 📂 hooks/              # Admin-specific hooks
│   │   ├── 📂 services/           # Admin API services
│   │   └── 📂 types/              # Admin TypeScript types
│   └── 📂 public/                 # Public pages (Landing, About, etc.)
│       ├── 📂 components/         # Public-specific components
│       ├── 📂 pages/              # Public pages
│       ├── 📂 hooks/              # Public-specific hooks
│       ├── 📂 services/           # Public API services
│       └── 📂 types/              # Public TypeScript types
├── 📂 shared/                     # Shared resources across features
│   ├── 📂 components/             # Reusable UI components
│   │   ├── 📂 ui/                 # Basic UI elements (Button, Input, etc.)
│   │   ├── 📂 layout/             # Layout components (Header, Sidebar, etc.)
│   │   └── 📂 common/             # Common components (Modal, Drawer, etc.)
│   ├── 📂 hooks/                  # Shared custom hooks
│   ├── 📂 utils/                  # Utility functions
│   ├── 📂 constants/              # Application constants
│   ├── 📂 services/               # Shared API services
│   └── 📂 types/                  # Shared TypeScript types
├── 📂 assets/                     # Static assets
│   ├── 📂 images/                 # Image files
│   ├── 📂 icons/                  # Icon files
│   └── 📂 fonts/                  # Font files
├── 📂 styles/                     # Global styles
│   ├── 📂 globals.css             # Global CSS
│   └── 📂 variables.css           # CSS variables
├── 📂 router/                     # Routing configuration
│   ├── 📂 routes/                 # Route definitions
│   └── 📂 guards/                 # Route guards
├── 📂 store/                      # State management
│   ├── 📂 slices/                 # Redux slices
│   └── 📂 middleware/             # Custom middleware
├── 📂 config/                     # Configuration files
├── 📂 api/                        # API configuration
├── App.jsx                        # Root component
├── main.jsx                       # Entry point
└── index.css                      # Base styles
```

## 🎯 Naming Conventions

### 📁 Folders

- **PascalCase** for feature folders: `Customer`, `SuperAdmin`
- **camelCase** for utility folders: `components`, `hooks`, `services`
- **kebab-case** for page folders: `user-profile`, `booking-management`

### 📄 Files

- **PascalCase** for components: `UserProfile.jsx`, `BookingCard.jsx`
- **camelCase** for utilities: `apiClient.js`, `dateUtils.js`
- **kebab-case** for assets: `user-avatar.png`, `logo-dark.svg`

### 🏷️ Component Files

```
ComponentName.jsx          # Main component file
ComponentName.styles.jsx   # Component-specific styles (if needed)
ComponentName.test.jsx     # Component tests
ComponentName.stories.jsx  # Storybook stories
index.jsx                  # Export file (optional)
```

## 📋 File Organization Rules

### 1. **Feature-Based Structure**

- Each user role has its own feature folder
- Related functionality is grouped together
- Clear separation of concerns

### 2. **Shared Resources**

- Common UI components in `shared/components`
- Reusable hooks in `shared/hooks`
- Utility functions in `shared/utils`

### 3. **Import Paths**

```javascript
// ✅ Good - Clear and explicit
import { Button } from "@/shared/components/ui/Button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { UserService } from "@/features/customer/services/UserService";

// ❌ Avoid - Relative paths
import Button from "../../../../../../shared/components/ui/Button";
```

### 4. **Index Files**

Use index files for cleaner imports:

```javascript
// shared/components/ui/index.js
export { default as Button } from "./Button";
export { default as Input } from "./Input";
export { default as Modal } from "./Modal";

// Usage
import { Button, Input, Modal } from "@/shared/components/ui";
```

## 🔄 Migration Strategy

1. **Phase 1**: Create new folder structure
2. **Phase 2**: Move shared components to `shared/`
3. **Phase 3**: Organize pages by feature
4. **Phase 4**: Update all import paths
5. **Phase 5**: Clean up old structure

## 📊 Benefits

✅ **Scalability**: Easy to add new features
✅ **Maintainability**: Clear separation of concerns
✅ **Team Collaboration**: Multiple developers can work on different features
✅ **Code Reusability**: Shared resources are easily accessible
✅ **Testing**: Feature-based testing is easier
✅ **Performance**: Better tree-shaking and code splitting

## 🛠️ Best Practices

1. **Keep features independent** - Minimize cross-feature dependencies
2. **Use barrel exports** - Create index.js files for cleaner imports
3. **Consistent naming** - Follow the naming conventions strictly
4. **Document structure** - Keep this documentation updated
5. **Regular cleanup** - Remove unused files and imports

## 🚀 Next Steps

1. Set up the complete folder structure
2. Create configuration for path aliases
3. Migrate existing files to new structure
4. Update all import statements
5. Set up linting rules to enforce structure
