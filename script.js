const data = [
    {
        organization: "CeSIUM - Centro de Estudantes de Engenharia Informática da Universidade do Minho",
        positions: [
            "Marketing Director",
            "Marketing Co-Director",
            "Collaborator"
        ]
    },
    {
        organization: "CoderDojo Braga",
        positions: [
            "Co-Champion & Mentor",
            "Mentor"
        ]
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

        const organizationDiv = document.createElement('div');
        organizationDiv.className = 'flex flex-col gap-4';

        const line = document.createElement('div');
        line.className = 'line h-full w-3 bg-black-800 z-40';

        organizationDiv.appendChild(line);
    
        item.positions.forEach((position, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
    
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            if (index === 0) {
                bullet.style.width = '16px';
                bullet.style.height = '16px';
            }
    
            bullet.style.marginLeft = index === 0 ? '0' : '2px';
    
            const content = document.createElement('div');
            content.className = 'content';
    
            if (index === 0) {
                const title = document.createElement('div');
                title.className = 'title kulim-park-regular';
                title.textContent = item.organization;
                content.appendChild(title);
            }
    
            const positionElem = document.createElement('div');
            positionElem.className = 'position kulim-park-regular';
            positionElem.textContent = position;
    
            content.appendChild(positionElem);
    
            timelineItem.appendChild(bullet);
            timelineItem.appendChild(content);
    
            organizationDiv.appendChild(timelineItem);
        });

;

    
        timeline.appendChild(organizationDiv);
    });    
}

createTimeline(data);
