const data = [
    {
        organization: "CeSIUM",
        positions: [
            "Marketing Director",
            "Marketing Co-Director",
            "Collaborator"
        ],
        link: "https://cesium.di.uminho.pt"
    },
    {
        organization: "CoderDojo Braga",
        positions: [
            "Co-Champion & Mentor",
            "Mentor"
        ],
        link: "https://coderdojobraga.org"
    },
    {
        organization: "Martins & Filhos, SA",
        positions: [
            "Software Engineering Intern"
        ]
    },
    {
        organization: "Rolling Space",
        positions: [
            "Software Engineering Intern"
        ]
    }
];

function createTimeline(data) {
    const timeline = document.getElementById('timeline');

    data.forEach(item => {

        const organizationDiv = document.createElement('organization-div');
        organizationDiv.className = 'flex flex-col gap-2';

        item.positions.forEach((position, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
    
            const bullet = document.createElement('div');
            bullet.className = index === 0 ? 'bullet-first' : 'bullet';

            bullet.style.marginLeft = index === 0 ? '0' : '2px';

            const content = document.createElement('div');
            content.className = 'content';
    
            if (index === 0) {
                const title = document.createElement('a');
                title.className = 'title kulim-park-semibold text-xl text-text';
                title.textContent = item.organization;
                title.href = item.link;
                content.appendChild(title);
            }
    
            const positionElem = document.createElement('div');
            positionElem.className = 'position kulim-park-regular text-md text-text';
            positionElem.textContent = position;
    
            content.appendChild(positionElem);
    
            timelineItem.appendChild(bullet);
            timelineItem.appendChild(content);
    
            organizationDiv.appendChild(timelineItem);
        });

    
        timeline.appendChild(organizationDiv);
    });    
}

createTimeline(data);

/*
const profileData = {
    "contacts": [
        {
            "platform": "email",
            "url": "",
            "icon": "email",
        },
        {
            "platform": "Twitter",
            "url": "https://twitter.com/username",
            "icon": "twitter"
        },
        {
            "platform": "LinkedIn",
            "url": "https://www.linkedin.com/in/username",
            "icon": "linkedin"
        },
        {
            "platform": "GitHub",
            "url": "https://github.com/username",
            "icon": "code"
        }
    ]
};

function generateContactSection(profileData) {
    const contactSection = document.getElementById('contactinfo');
    contactSection.className = 'bg-secondary w-full rounded-2xl px-8 py-4 mt-auto';

    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'flex gap-6 space-x-6';
    
    profileData.contacts.forEach(contact => {
        
        if (contact.platform === 'email' && !contact.url) {
            contact.url = `mailto:me@juliojpinto.com`; 
        }

        const link = document.createElement('a');
        link.href = contact.url;
        link.target = "_blank"; 

        const icon = document.createElement('img');
        icon.src = `path/to/icons/${contact.icon}.png`; 
        icon.alt = `${contact.platform}`;
        icon.className = 'h-8 w-8';

        
        link.appendChild(icon);

        
        iconContainer.appendChild(link);
    });

    contactSection.appendChild(iconContainer);

    return contactSection;
}

generateContactSection(profileData);
*/