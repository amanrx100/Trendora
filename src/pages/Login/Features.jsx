import { Truck, Smile, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Truck className="text-white" size={20} />,
    title: "Free Shipping",
    subtitle: "Free shipping all over the US",
  },
  {
    icon: <Smile className="text-white" size={20} />,
    title: "100% Satisfaction",
    subtitle: "Free shipping all over the US",
  },
  {
    icon: <CreditCard className="text-white" size={20} />,
    title: "Secure Payments",
    subtitle: "Free shipping all over the US",
  },
  {
    icon: <Headphones className="text-white" size={20} />,
    title: "24/7 Support",
    subtitle: "Free shipping all over the US",
  },
];

const Features = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 bg-blue-50 rounded-lg p-4 min-w-[230px]"
        >
          <div className="bg-[#197ba9] p-2 rounded-full">
            {feature.icon}
          </div>
          <div>
            <h4 className="text-md font-semibold text-gray-900">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
