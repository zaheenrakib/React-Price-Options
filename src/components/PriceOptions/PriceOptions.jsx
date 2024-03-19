import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "Access to sauna",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to all equipment",
                "Access to group fitness classes",
                "Personal trainer consultation",
                "Nutritional guidance",
                "Access to swimming pool"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to all equipment and amenities",
                "Unlimited group fitness classes",
                "Monthly personal training sessions",
                "Access to spa facilities",
                "Access to spa facilities",
                "Complimentary towel service"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl" >Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};



export default PriceOptions;