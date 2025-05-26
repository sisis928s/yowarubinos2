// In the initializeGrid function, add rigging check:

const initializeGrid = async () => {
  // Check if user is rigged
  const { data: { win_chance }, error } = await supabase.rpc('check_rigged_status', {
    target_user_id: user.id
  });

  if (error) {
    console.error('Error checking rig status:', error);
    return createRandomGrid();
  }

  // Use win chance to determine grid generation
  const shouldWin = Math.random() < win_chance;
  
  if (shouldWin) {
    return createWinningGrid();
  } else {
    return createLosingGrid();
  }
};

const createWinningGrid = () => {
  // Create a grid with mines in less likely positions
  // Implementation details...
};

const createLosingGrid = () => {
  // Create a grid with mines in more likely positions
  // Implementation details...
};