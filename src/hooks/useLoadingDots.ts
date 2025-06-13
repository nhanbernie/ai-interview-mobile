import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

/**
 * custom hook để tạo hiệu ứng "Đang ghi âm..." với 3 chấm nhấp nháy
 * - sử dụng Animated.Value để kiểm soát độ trong suốt và kích thước
 * - tạo hiệu ứng với độ trễ khác nhau cho mỗi chấm
 * - hỗ trợ bắt đầu/dừng animation
 */
interface UseLoadingDotsResult {
  dot1: Animated.Value;
  dot2: Animated.Value;
  dot3: Animated.Value;
  startAnimation: () => void;
  stopAnimation: () => void;
}

export const useLoadingDots = (): UseLoadingDotsResult => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  const createDotAnimation = (dotValue: Animated.Value, delay: number = 0) => {
    return Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(dotValue, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(dotValue, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    );
  };
  const startAnimation = () => {
    // Reset all dots to initial state
    dot1.setValue(0);
    dot2.setValue(0);
    dot3.setValue(0);

    // Create staggered animation for all dots
    animationRef.current = Animated.parallel([
      createDotAnimation(dot1, 0),
      createDotAnimation(dot2, 150), 
      createDotAnimation(dot3, 300),
    ]);

    animationRef.current.start();
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current = null;
    }

    // Reset all dots to initial state
    dot1.setValue(0);
    dot2.setValue(0);
    dot3.setValue(0);
  };

  return {
    dot1,
    dot2,
    dot3,
    startAnimation,
    stopAnimation,
  };
};
