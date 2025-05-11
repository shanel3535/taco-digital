
interface ReadingGuideProps {
  readingGuide: boolean;
  yPosition: number;
}

const ReadingGuide = ({ readingGuide, yPosition }: ReadingGuideProps) => {
  if (!readingGuide) {
    return null;
  }
  
  return (
    <div 
      className="fixed w-full h-8 bg-yellow-200/30 pointer-events-none z-40"
      style={{ top: yPosition - 20 }}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default ReadingGuide;
