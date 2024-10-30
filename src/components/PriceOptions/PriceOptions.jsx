import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

 const priceOptions =   [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 complimentary personal training session",
            "Free Wi-Fi",
            "Access to cardio machines",
            "Water fountain access",
            "Discounts on fitness apparel"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "All group fitness classes",
            "2 complimentary personal training sessions",
            "Free Wi-Fi",
            "Access to cardio and weight machines",
            "Towel service",
            "Discounts on fitness apparel and supplements",
            "Access to mobile app for fitness tracking"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 69.99,
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "All group fitness classes",
            "5 complimentary personal training sessions",
            "Pool and sauna access",
            "Towel service",
            "Free Wi-Fi",
            "Advanced fitness tracking on mobile app",
            "Discounts on personal training packages",
            "Access to cycling and yoga studios",
            "Priority booking for group classes"
          ]
        },
        {
          "id": 4,
          "name": "Elite",
          "price": 89.99,
          "features": [
            "24/7 gym access",
            "Private locker room and shower access",
            "All group fitness classes, including advanced sessions",
            "Unlimited personal training sessions",
            "Pool, sauna, and hot tub access",
            "Guest privileges (1 guest pass per month)",
            "Towel and laundry service",
            "VIP lounge access",
            "Discounts on fitness events and merchandise",
            "Customized nutrition and fitness plan",
            "Free body composition analysis",
            "Access to on-site physical therapist and massage services"
          ]
        },
        {
          "id": 5,
          "name": "Ultimate",
          "price": 119.99,
          "features": [
            "24/7 access to all facilities",
            "Private locker room with dedicated lockers",
            "VIP group fitness classes, including workshops",
            "Unlimited personal training and wellness coaching",
            "Pool, sauna, hot tub, and steam room access",
            "Exclusive lounge with complimentary snacks and drinks",
            "Guest privileges (3 guest passes per month)",
            "Priority class and equipment booking",
            "Custom nutrition plan with dietary consultations",
            "Access to on-site physical therapist, massage, and spa services",
            "Free body composition and metabolic analysis",
            "Exclusive events and wellness seminars"
          ]
        }
      ]
      



    return (
        <div className="3-12">
            <h2 className="text-5xl">Best Prices in the city</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map((option) => <PriceOption key={option.id} option={option}></PriceOption> )
            }
            </div>
        </div>
    );
};

export default PriceOptions;