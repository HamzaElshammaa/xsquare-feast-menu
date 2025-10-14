import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: number;
    description?: string;
    image?: string;
  } | null;
}

const MenuItemModal = ({ isOpen, onClose, item }: MenuItemModalProps) => {
  if (!item) return null;

  const handleOrderNow = () => {
    window.open("https://xsquare.foodics.online", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>

          {/* Image */}
          {item.image && (
            <div className="w-full h-64 overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-4xl font-heading text-primary uppercase mb-2 tracking-wide">
                {item.name}
              </DialogTitle>
            </DialogHeader>

            {item.description && (
              <p className="font-sans text-sm text-gray-700 italic mb-4 leading-relaxed">
                {item.description}
              </p>
            )}

            <div className="flex items-center justify-between mb-6">
              <span className="font-heading text-5xl font-bold text-primary">
                {item.price} EGP
              </span>
            </div>

            <Button
              onClick={handleOrderNow}
              variant="cta"
              size="lg"
              className="w-full text-lg font-semibold"
            >
              Order Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemModal;
