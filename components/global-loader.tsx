import { motion, AnimatePresence } from "framer-motion";

export const GlobalLoader = ({ isLoading }: {isLoading: boolean}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-800"
              style={{ fontFamily: 'Bahnschrift, sans-serif' }}
            >
              Blockchain Masters Academy
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-orange-600 mt-2"
            >
              Loading...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};