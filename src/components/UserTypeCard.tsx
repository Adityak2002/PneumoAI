import React from 'react';
import { Users2, User, GraduationCap } from 'lucide-react';

interface UserTypeCardProps {
  type: 'doctor' | 'patient' | 'student';
  title: string;
  description: string;
  onClick: () => void;
}

const UserTypeCard: React.FC<UserTypeCardProps> = ({ type, title, description, onClick }) => {
  const icons = {
    doctor: <Users2 className="h-8 w-8 text-blue-600" />,
    patient: <User className="h-8 w-8 text-green-600" />,
    student: <GraduationCap className="h-8 w-8 text-purple-600" />
  };

  const colors = {
    doctor: 'hover:border-blue-400 hover:bg-blue-50',
    patient: 'hover:border-green-400 hover:bg-green-50',
    student: 'hover:border-purple-400 hover:bg-purple-50'
  };

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer p-6 border-2 rounded-xl transition-all duration-300 ${colors[type]} hover:shadow-lg`}
    >
      <div className="flex items-center justify-center mb-4">
        {icons[type]}
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default UserTypeCard;