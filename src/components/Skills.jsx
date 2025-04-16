import { FaHtml5, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="text-center py-4 border-t border-b border-black text-[#2B1910]">
      
      <div className="grid grid-cols-2 gap-y-4 gap-x-8 justify-items-center text-sm">
        <div className="flex items-center space-x-2">
          <FaHtml5 className="text-[#2B1910] text-lg" />
          <span className="font-medium">HTML</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCss3Alt className="text-[#2B1910] text-lg" />
          <span className="font-medium">CSS</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaJava className="text-[#2B1910] text-lg" />
          <span className="font-medium">Java</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPython className="text-[#2B1910] text-lg" />
          <span className="font-medium">Python</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
