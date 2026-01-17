🎨 UI Components Guide
===================

This document provides detailed information about the UI components used in the AI for Students platform.

## 🎯 Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary-100: #E3F2FD;
  --primary-500: #2196F3;
  --primary-900: #0D47A1;

  /* Secondary Colors */
  --secondary-100: #F3E5F5;
  --secondary-500: #9C27B0;
  --secondary-900: #4A148C;

  /* Neutral Colors */
  --neutral-100: #F5F5F5;
  --neutral-500: #9E9E9E;
  --neutral-900: #212121;

  /* Semantic Colors */
  --success: #4CAF50;
  --warning: #FFC107;
  --error: #F44336;
  --info: #2196F3;
}
```

### Typography
```css
:root {
  /* Font Families */
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Poppins', sans-serif;
  --font-mono: 'Fira Code', monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
}
```

## 🧩 Core Components

### Button Component
```javascript
const Button = ({ 
  variant = 'primary',
  size = 'medium',
  children,
  isLoading,
  ...props 
}) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
    outline: 'border-2 border-primary-500 text-primary-500'
  };
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
};
```

### Card Component
```javascript
const Card = ({ 
  title,
  subtitle,
  image,
  children,
  className = ''
}) => {
  return (
    <div className={`
      rounded-xl shadow-lg overflow-hidden
      bg-white dark:bg-neutral-800
      ${className}
    `}>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        {title && (
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        )}
        {subtitle && (
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
```

## 📱 Navigation Components

### Navbar Component
```javascript
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/games">Games</NavLink>
            <NavLink href="/community">Community</NavLink>
          </div>
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};
```

### Breadcrumb Component
```javascript
const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="w-4 h-4 mx-2 text-neutral-400" />
            )}
            <Link
              href={item.path}
              className={`
                hover:text-primary-500
                ${index === items.length - 1 ? 'text-neutral-900' : 'text-neutral-600'}
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
```

## 📊 Data Display Components

### Table Component
```javascript
const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-neutral-200">
        <thead className="bg-neutral-50">
          <tr>
            {columns.map(column => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-neutral-200">
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map(column => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
```

### Progress Component
```javascript
const Progress = ({ 
  value,
  max = 100,
  label,
  showPercentage = true
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-neutral-700">
            {label}
          </span>
          {showPercentage && (
            <span className="text-sm font-medium text-neutral-700">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full bg-neutral-200 rounded-full h-2.5">
        <div
          className="bg-primary-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
```

## 🎯 Form Components

### Input Component
```javascript
const Input = ({
  label,
  error,
  type = 'text',
  ...props
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
          w-full px-3 py-2 rounded-lg border
          focus:outline-none focus:ring-2
          ${error
            ? 'border-error-300 focus:ring-error-500'
            : 'border-neutral-300 focus:ring-primary-500'
          }
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-error-500">{error}</p>
      )}
    </div>
  );
};
```

### Select Component
```javascript
const Select = ({
  label,
  options,
  value,
  onChange,
  error
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`
          w-full px-3 py-2 rounded-lg border
          appearance-none bg-white
          focus:outline-none focus:ring-2
          ${error
            ? 'border-error-300 focus:ring-error-500'
            : 'border-neutral-300 focus:ring-primary-500'
          }
        `}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-error-500">{error}</p>
      )}
    </div>
  );
};
```

## 🎨 Feedback Components

### Toast Component
```javascript
const Toast = ({
  message,
  type = 'info',
  onClose
}) => {
  const types = {
    success: {
      icon: CheckCircleIcon,
      className: 'bg-success-100 text-success-900'
    },
    error: {
      icon: XCircleIcon,
      className: 'bg-error-100 text-error-900'
    },
    info: {
      icon: InformationCircleIcon,
      className: 'bg-info-100 text-info-900'
    }
  };

  const { icon: Icon, className } = types[type];

  return (
    <div className={`
      flex items-center p-4 rounded-lg shadow-lg
      ${className}
    `}>
      <Icon className="w-5 h-5 mr-3" />
      <p className="font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto"
      >
        <XIcon className="w-5 h-5" />
      </button>
    </div>
  );
};
```

### Modal Component
```javascript
const Modal = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button onClick={onClose}>
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
```

## 🎮 Game UI Components

### GameCard Component
```javascript
const GameCard = ({
  game,
  onPlay
}) => {
  return (
    <div className="group relative rounded-xl overflow-hidden">
      <div className="aspect-video">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="
        absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
        flex flex-col justify-end p-4 text-white
      ">
        <h3 className="text-xl font-bold mb-2">{game.title}</h3>
        <p className="text-sm opacity-90 mb-4">{game.description}</p>
        <button
          onClick={() => onPlay(game)}
          className="
            bg-white text-black font-medium
            px-4 py-2 rounded-lg
            transform translate-y-full
            group-hover:translate-y-0
            transition-transform duration-200
          "
        >
          Play Now
        </button>
      </div>
    </div>
  );
};
```

---

This UI components documentation will be continuously updated as new components are added or existing ones are modified. For implementation questions, please refer to the technical team. 