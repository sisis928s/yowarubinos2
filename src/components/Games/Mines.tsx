import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface MinesProps {
  user: any; // Replace with proper user type
}

const Mines: React.FC<MinesProps> = ({ user }) => {
  const [grid, setGrid] = useState<boolean[][]>([]);

  const initializeGrid = async () => {
    // Check if user exists before accessing properties
    if (!user) {
      return createRandomGrid();
    }

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
    return Array(5).fill(Array(5).fill(false));
  };

  const createLosingGrid = () => {
    // Create a grid with mines in more likely positions
    // Implementation details...
    return Array(5).fill(Array(5).fill(false));
  };

  const createRandomGrid = () => {
    return Array(5).fill(Array(5).fill(false));
  };

  useEffect(() => {
    initializeGrid().then(newGrid => setGrid(newGrid));
  }, [user]); // Add user to dependency array to reinitialize when user changes

  return (
    <div className="grid gap-2">
      {grid.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((cell, j) => (
            <button
              key={`${i}-${j}`}
              className="w-12 h-12 bg-gray-200 rounded"
              onClick={() => {/* Handle click */}}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Mines;