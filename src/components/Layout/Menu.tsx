// Update the menu container styles
<motion.div 
  className="fixed top-0 right-0 w-full md:w-80 h-full bg-spdm-dark border-l border-spdm-green/30 z-50 overflow-y-auto"
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
>
  {/* Menu content */}
</motion.div>

// Update button styles for better touch targets
<motion.button
  className="flex items-center w-full p-4 rounded-md hover:bg-spdm-gray transition-all duration-200 border border-spdm-green/50 hover:border-spdm-green group"
  // ... other props
>
  {/* Button content */}
</motion.button>