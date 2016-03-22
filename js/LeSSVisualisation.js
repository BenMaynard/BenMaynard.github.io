//Need to add improvment backlog

// Creates canvas 320 � 200 at 10, 50
var paper = Raphael(50, 50, 1500, 1000);


// x and y co-ordinates need to match

//Centre block stats. Need to rename these variables
var regularRectangleHeight = 50;
var communitiesRectangleHeight = 85;
var bevel = 10;
var largeRectangleLength = 600;
var smallRectangleLength = 300;


 //Principle Pop-Up Text
var largeScaleScrumIsScrumPopUpText = " 2 Guide: Inspect items during Sprint (LeSS) \n \
4 Guide: Build Team-Based Organizations (LeSS) \n \
2 Guide: Coordinate together & talking (LeSS) \n \
2 Guide: Coordinate together & talking (LeSS) \n \
9 Guide: Creating the Definition of Done (LeSS) \n \
3 Guide: Culture follows Structure (LeSS) \n \
7 Guide: Customer Collaborations over... (LeSS) \n  \
8 Guide: Dealing with Parents (LeSS) \n \
2 Guide: Diverge merge in large meetings (LeSS) \n \
7 Guide: Don’t Do It (LeSS) \n \
9 Guide: Evolve the Definition of Done (LeSS) \n \
3 Guide: Getting Started (LeSS) \n \
8 Guide: Handling Special Items (LeSS) \n \
7 Guide: Helpers (LeSS) \n \
2 Guide: How to split items (LeSS) \n \
10 Guide: Initial PBR (LeSS) \n \
2 Guide: Lead Product Manager is Product Owner (LeSS) \n \
7 Guide: Let Go  (LeSS) \n \
8 Guide: Minimize Constraints, Don’t “Manage External Dependencies” (LeSS) \n \
4 Guide: Prefer Specialization in Customer Domain (LeSS) \n \
4 Guide: Product over Project or Program (LeSS) \n \
2 Guide: Shared understanding (LeSS) \n \
7 Guide: Ship At Least Every Sprint  (LeSS) \n \
2 Guide: Split items are 1/3 of a Sprint, or less (LeSS) \n \
10 Guide: Splitting (LeSS) \n \
2 Guide: Sprint Planning One maximum duration of 50% of total Sprint Planning (LeSS) \n \
8 Guide: Take a Bite (LeSS) \n \
2 Guide: Teams decide who does what (self-organizing) (LeSS) \n \
8 Guide: Tools for Large Product Backlogs (LeSS) \n \
7 Guide: Who should be Product Owner? (LeSS) \n";


var moreWithLeSSPopUpText;
moreWithLeSSPopUpText = " 8 Guide: Area Backlogs (LeSS Huge) \n  \
 7 Guide: Area Product Owners  (LeSS Huge) \n  \
 7 Guide: Don’t Let Undone Work be Your Undoing  (LeSS) \n  \
 4 Guide: Dynamics of Requirement Areas (LeSS Huge) \n  \
 7 Guide: Five Relationships (LeSS) \n  \
 8 Guide: Handling Gigantic Requirements (LeSS Huge) \n  \
 4 Guide: LeSS Huge Organization (LeSS Huge) \n  \
 7 Guide: LeSS Huge Product Owner (LeSS Huge) \n  \
 7 Guide: LeSS Meetings (LeSS) \n  \
 4 Guide: LeSS Organization (LeSS Huge) \n  \
 2 Guide: Maximum 3 Teams per dedicated ScrumMaster (LeSS) \n  \
 2 Guide: Multiteam Design Workshop with agile modelling# (LeSS) \n  \
 10 Guide: Multi-Team PBR (LeSS) \n  \
 8 Guide: New Area for Giant Requirement (LeSS Huge) \n  \
 2 Guide: Open Space (LeSS) \n  \
 4 Guide: Organizing Multisite in LeSS (LeSS Multi-Site) \n  \
 4 Guide: Organizing Multisite in LeSS Huge (LeSS Multi-Site) \n  \
 2 Guide: Overall PBR for shared understanding and alignment (LeSS) \n  \
 7 Guide: PO Team Helped by a ScrumMaster (LeSS Huge) \n  \
 7 Guide: Product Owner Multisite Tips (LeSS Multi-Site) \n  \
 10 Guide: Scaling Estimation (LeSS) \n  \
 2 Guide: Teams do PB administration to help PO (LeSS) \n  \
 7 Guide: Temporary Fake Product Owner (LeSS) \n  \
 5 Guide: The LeSS Organization (LeSS) \n  \
 8 Guide: Three Levels Max (LeSS Huge) \n  \
 12 Guide: Just Talk (LeSS) \n  \
 12 Guide: Maybe Don’t do Scrum of Scrums (LeSS) \n  \
 12 Guide: Open Space (LeSS) \n  \
 2 Guide: Product Owner has support (LeSS) \n  \
 2 Guide: Review Bazaar (LeSS) \n  \
 2 Guide: Rotate infrastructure work (LeSS) \n  \
 2 Guide: Rotating Team representatives (LeSS) \n  \
 12 Guide: Scouts (LeSS) \n  \
 12 Guide: Travelers (LeSS)";

var transparencyPopUpText = " Boilerplate text 2 Guide: Review Bazaar (LeSS) \n  \
 2 Guide: Rotate infrastructure work (LeSS) \n  \
 2 Guide: Rotating Team representatives (LeSS) \n  \
 12 Guide: Scouts (LeSS) \n  \
 12 Guide: Travelers (LeSS";

var customerCentricPopUpText;
customerCentricPopUpText = " 7 Guide: Don’t Be Nice  (LeSS) \n 8 Guide: More Outcomes, less Outputs  (LeSS) \n 7 Guide: Prioritization over Clarification (LeSS) \n 6.5 Guide: Product over Project or Program (LeSS) \n 2 Guide: Teams specialize in customer (not technical) areas (LeSS) \n 7 Guide: Who are those Users/Customers? (LeSS) \n";
var wholeProductFocusPopUpText = "";

var continuousImprovementTowardsPerfectionPopUpText;
continuousImprovementTowardsPerfectionPopUpText = " 3 Guide: Educate all Sites (LeSS Multi-Site) \n 3 Guide: Growing your Adoption (LeSS) \n";

var wholeProductFocusPopUpText;
wholeProductFocusPopUpText = " 6.5 Guide: Define your Product (LeSS) \n  \
 3 Guide: Establish Clear Direction (LeSS) \n  \
 6.5 Guide: Expanding Product Definition (LeSS) \n  \
 2 Guide: Multiteam PBR (LeSS) \n  \
 3 Guide: One Requirement Area at a Time (LeSS Huge) \n  \
 10 Guide: Overall PBR (LeSS) \n  \
 2 Guide: Overall PBR for shared understanding and alignment (LeSS) \n  \
 4 Guide: Requirement Areas (LeSS Huge) \n  \
 4 Guide: Seeing The Whole (LeSS) \n  \
 6.5 Guide: What is Your Product? (LeSS) \n  \
 2 Guide: Whole team refines (LeSS) \n  \
";


var leanThinkingPopUpText;
leanThinkingPopUpText = " 5 Guide: Go See (LeSS) \n  \
3 Guide: Improvement Service (LeSS) \n \
3 Guide: Job Safety, but not Role Safety (LeSS) \n \
5 Guide: Managers are Optional (LeSS) \n \
5 Guide: Managers as Teachers, and Learners (LeSS) \n \
5 Guide: Theory Y Management  (LeSS) \n \
5 Guide: Understand Taylor and Fayol (LeSS) \n \
";


var systemsThinkingPopUpText = "";

var empircalProcessControlPopUpText;
empircalProcessControlPopUpText = " 5 Guide: LeSS Metrics with Less Targets (LeSS) \n";

var queueingTheoryleSSIsScrumPopUpText;
queueingTheoryleSSIsScrumPopUpText = " 4 Guide: Transitioning to Feature Teams (LeSS Huge) \n  \
 4 Guide: Understanding Feature Teams (LeSS) \n  \
";


//Required event or artefact colour variables

// Product Backlog style info

var requiredEventStyle = {
    fill: "#ccffcc",
    stroke: "#aaa",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    cursor: "pointer"
};

//Required event or artefact colour variables


var optionalEventStyle;
optionalEventStyle = {
    fill: "#99CCCC",
    stroke: "#aaa",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    cursor: "pointer"
};

var communityStyle;
communityStyle = {
    fill: "#f2f2f2",
    stroke: "#aaa",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    cursor: "pointer"
};

var teamCircleStyle;
teamCircleStyle = {
    fill: "#223fa3",
    stroke: "#000",
    "stroke-width": 80,
    "stroke-opacity": 0.5
};

//Principle Colours
var principleColour = "#66ff66";

// X (horizontal position) ,Y (vertical position), width, height 

//fonts
var centreFont;
centreFont = {"font-family": "serif", "font-style": "regular", "font-size": "20"};

var borderFont;
borderFont = {"font-family": "serif", "font-style": "regular", "font-size": "20"};

var teamFont;
teamFont = {"font-family": "serif", "font-style": "regular", "font-size": "20"};

var productBacklogtlye;
productBacklogStlye = "#ccffcc";

var customerValueStlye;
customerValueStlye = "#ccffcc";


var productBacklogTextStyle;
productBacklogTextStyle = {
    "font-family": "serif",
    "font-style": "regular",
    "font-size": "30",
    "letter-spacing": "18px"
};

var customerValueFlowTextStyle;
customerValueFlowTextStyle = {
    "font-family": "serif",
    "font-style": "regular",
    "font-size": "30",
    "letter-spacing": "12px"
};

var customerValueFlowArrowStyle;
customerValueFlowArrowStyle = {
    'stroke-width': 15,
    'stroke': ('white'),
    'arrow-end': 'block-midium-midium',
    'arrow-start': 'oval-narrow-short'
};

//Links
var teamLink;
teamLink = {href: "http://less.works/less/structure/teams.html"};

var leanThinkingLink;
leanThinkingLink = {href: "http://less.works/less/principles/lean-thinking.html#LeanThinking"};

var moreWithLessLink;
moreWithLessLink = {href: "https://less.works/less/principles/more-with-less.html"};

var transparencyLink;
transparencyLink = {href: "https://less.works/less/principles/transparency.html"};

var continuousImprovementTowardsPerfectionLink;
continuousImprovementTowardsPerfectionLink = {href: "https://less.works/less/principles/continuous-improvement-towards-perfection.html"};

var empiricalProcessControlLink;
empiricalProcessControlLink = {href: "https://less.works/less/principles/empirical_process_control.html"};

var systemsThinkingLink;
systemsThinkingLink = {href: "https://less.works/less/principles/systems_thinking.html"};

var largeScaleScrumIsScrumLink;
largeScaleScrumIsScrumLink = {href: "https://less.works/less/principles/large_scale_scrum_is_scrum.html"};

var wholeProductFocusLink;
wholeProductFocusLink = {href: "https://less.works/less/principles/whole-product-focus.html"};

var customerCentricLink;
customerCentricLink = {href: "https://less.works/less/principles/customer_centric.html"};

var queueingTheoryLink;
queueingTheoryLink = {href: "https://less.works/less/principles/queueing_theory.html"};

var productBacklogLink
productBacklogLink = {href: "https://less.works/less/framework/product-backlog.html"};

var PBRLink;
PBRLink = {href: "http://less.works/less/framework/product-backlog-refinement.html"};

//Border Rectangle Dimensions
var borderSideRectangleHeight = 229;
var borderSideRectangleWidth = 50; //top bar needs to be the sum of with side bar widths and the gap in between
var borderTopBottomRectangleWidth = (660 + borderSideRectangleWidth) / 2; //the 660 is the diff between the horizontal and vertical. need to add it as a clac but was playing up
var borderTopBottomRectangleHeight = 50;

//Top Bar Horizontal and Vertical Positions
var topBarHorizontalStartingPosition = 250;
var topBarVerticalPosition = 100;

//Bottom Bar Horizontal and Vertical Positions
var bottomBarHorizontalStartingPosition = 250;
var bottomBarVerticalPosition = borderTopBottomRectangleHeight + (borderSideRectangleHeight * 3) + 100;

//Left Border Horizontal and Vertical Positions
var leftBarHorizontalPosition = 250;
var leftBarVerticalStartingPosition = borderTopBottomRectangleHeight + 100; //merge with right bar variable 

//Right Border Horizontal and Vertical Positions
var rightBarHorizontalPosition = 910;
var rightBarVerticalStartingPosition = borderTopBottomRectangleHeight + 100;

//Text Offset
var sideBarVerticalTextOffset = 10 - 100;
var topBarVerticalTextOffset = 25 - 100;
var topBarHorizontalTextOffset = 175;

//Text rotation in degrees
var textRotation = 90;

//Centre box offsets
var centreBoxesOffset = 5;

//Centre box horizontal and vertical positions
var fullWidthCentreBoxHorizontalPosition;
fullWidthCentreBoxHorizontalPosition = leftBarHorizontalPosition + borderSideRectangleWidth + centreBoxesOffset;
var fullWidthCentreBoxVerticalPosition;
fullWidthCentreBoxVerticalPosition = 100;

//Product Backlog & Value Flow
var productBacklog;
productBacklog = paper.rect(200, 100, regularRectangleHeight, 787)
    .attr({fill: productBacklogStlye})
    .attr(productBacklogLink);

var customerValueFlow;
customerValueFlow = paper.rect(960, 100, regularRectangleHeight, 787)
    .attr({fill: customerValueStlye})
    .attr(productBacklogLink);

var productBacklogText;
productBacklogText = paper.text(leftBarHorizontalPosition + borderSideRectangleHeight + 50, leftBarVerticalStartingPosition + sideBarVerticalTextOffset, "Product Backlog")
    .attr(productBacklogTextStyle).rotate(textRotation, 162, 125)
    .attr(productBacklogLink);


//Customer Value arrow
paper.path([
    'M', 985, 117,
    'L', 985, 885
]).attr(customerValueFlowArrowStyle)
    .attr(leanThinkingLink);

var customerValueFlowText;
customerValueFlowText = paper.text(leftBarHorizontalPosition + borderSideRectangleHeight + 45, leftBarVerticalStartingPosition + sideBarVerticalTextOffset - 760, "Customer Value Flow")
    .attr(customerValueFlowTextStyle).rotate(textRotation, 162, 125)
    .attr(leanThinkingLink);


//Top Bar
//Large Scale Scrum is Scrum. These text offsets need some work
var largeScaleScrumIsScrum;
largeScaleScrumIsScrum = paper.rect(topBarHorizontalStartingPosition, topBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour})
    .attr(largeScaleScrumIsScrumLink);

var largeScaleScrumIsScrumText;
largeScaleScrumIsScrumText = paper.text(topBarHorizontalStartingPosition + topBarHorizontalTextOffset, topBarVerticalPosition + topBarVerticalTextOffset + 100, "Large Scale Scrum Is Scrum")
    .attr(borderFont)
    .attr(largeScaleScrumIsScrumLink);




//too much misuing of constants. Need to understand which ones can have the same values and which are not. Feel like i am in a half way house, some elements move easily others are too manual

//Transparency. These text offsets need some work
var transparency;
transparency = paper.rect(topBarHorizontalStartingPosition + borderTopBottomRectangleWidth, topBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour})
    .attr(transparencyLink);

var transparencyText;
transparencyText = paper.text((topBarHorizontalStartingPosition + 350) + topBarHorizontalTextOffset, topBarVerticalPosition + topBarVerticalTextOffset + 100, "Transparency")
    .attr(borderFont)
    .attr(transparencyLink);

//Left Bar
//Continuous Improvement
var continuousImprovementTowardsPerfection;
continuousImprovementTowardsPerfection = paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour})
    .attr(continuousImprovementTowardsPerfectionLink);


var continuousImprovementTowardsPerfectionText;
continuousImprovementTowardsPerfectionText = paper.text(leftBarHorizontalPosition + 100, leftBarVerticalStartingPosition + sideBarVerticalTextOffset, "Continuous Improvement \n Towards Perfection")
    .attr(borderFont).rotate(textRotation, 210, 125)
    .attr(continuousImprovementTowardsPerfectionLink);
;

//Lean Thinking
var leanThinking;
leanThinking = paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition + borderSideRectangleHeight, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour})
    .attr(leanThinkingLink);

var leanThinkingText;
leanThinkingText = paper.text(leftBarHorizontalPosition + borderSideRectangleHeight + 100, leftBarVerticalStartingPosition + sideBarVerticalTextOffset, "Lean Thinking	")
    .attr(borderFont).rotate(textRotation, 210, 125)
    .attr(leanThinkingLink);


//Systems Thinking
var systemsThinking;
systemsThinking = paper.rect(leftBarHorizontalPosition, leftBarVerticalStartingPosition + (borderSideRectangleHeight * 2), borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour})
    .attr(systemsThinkingLink);

var systemsThinkingText;
systemsThinkingText = paper.text(leftBarHorizontalPosition + (borderSideRectangleHeight * 2) + 100, leftBarVerticalStartingPosition + sideBarVerticalTextOffset, "Systems Thinking	")
    .attr(borderFont).rotate(textRotation, 210, 125)
    .attr(systemsThinkingLink);


//Right Bar
//More with LeSS
var moreWithLeSS;
moreWithLeSS = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour})
    .attr(moreWithLessLink);

var moreWithLeSSText;
moreWithLeSSText = paper.text(rightBarHorizontalPosition + 100, rightBarVerticalStartingPosition + sideBarVerticalTextOffset, "More With LeSS")
    .attr(borderFont).rotate(textRotation, 870, 125)
    .attr(moreWithLessLink);


//Whole Product Focus
var wholeProductFocus;
wholeProductFocus = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition + borderSideRectangleHeight, borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour})
    .attr(wholeProductFocusLink);

var wholeProductFocusText;
wholeProductFocusText = paper.text(rightBarHorizontalPosition + borderSideRectangleHeight + 100, rightBarVerticalStartingPosition + sideBarVerticalTextOffset, "Whole Product Focus")
    .attr(borderFont).rotate(textRotation, 870, 125)
    .attr(wholeProductFocusLink);



//Customer Centric
var customerCentric;
customerCentric = paper.rect(rightBarHorizontalPosition, rightBarVerticalStartingPosition + (borderSideRectangleHeight * 2), borderSideRectangleWidth, borderSideRectangleHeight).attr({fill: principleColour})
    .attr(customerCentricLink);

var customerCentricText;
customerCentricText = paper.text(rightBarHorizontalPosition + (borderSideRectangleHeight * 2) + 100, rightBarVerticalStartingPosition + sideBarVerticalTextOffset, "Customer Centric")
    .attr(borderFont).rotate(textRotation, 870, 125)
    .attr(customerCentricLink);


//Bottom Bar

//Empirical Process Control. Need to sort our text offsets
var empiricalProcessControl;
empiricalProcessControl = paper.rect(bottomBarHorizontalStartingPosition, bottomBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour})
    .attr(empiricalProcessControlLink);

var empiricalProcessControlText;
empiricalProcessControlText = paper.text(bottomBarHorizontalStartingPosition + 175, bottomBarVerticalPosition + 25, "Empirical Process Control")
    .attr(borderFont)
    .attr(empiricalProcessControlLink);



//Queueing theory Need to sort our text offsets
var queueingTheory;
queueingTheory = paper.rect(bottomBarHorizontalStartingPosition + borderTopBottomRectangleWidth, bottomBarVerticalPosition, borderTopBottomRectangleWidth, borderTopBottomRectangleHeight).attr({fill: principleColour})
    .attr(queueingTheoryLink);

var queueingTheoryText;
queueingTheoryText = paper.text((bottomBarHorizontalStartingPosition * 2) + 275, bottomBarVerticalPosition + 25, "Queueing Theory")
    .attr(borderFont)
    .attr(queueingTheoryLink);


//Centre
/*
var productBacklog;
 productBacklog = paper.rect(fullWidthCentreBoxHorizontalPosition, borderTopBottomRectangleHeight + centreBoxesOffset + 100, largeRectangleLength, regularRectangleHeight, bevel)
    .attr(productBacklogRefinementStyle)
    .attr({href: "http://less.works/less/framework/product-backlog.html"});


var productBacklogText;
productBacklogText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, borderTopBottomRectangleHeight + centreBoxesOffset + 125, "One Product Backlog").attr(centreFont).attr({href: "http://less.works/less/framework/product-backlog.html"});
 */
//Overall PBR             
var overallPBR;
var centreBoxVertHeightOffset = 55;
overallPBR = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset) * 2 + centreBoxVertHeightOffset, largeRectangleLength, regularRectangleHeight, bevel)
    .attr(optionalEventStyle)
    .attr(PBRLink);

var overallPBRText;
overallPBRText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, borderTopBottomRectangleHeight + centreBoxesOffset + 80 + centreBoxVertHeightOffset - 10, "Overall Product Backlog Refinement (PBR)")
    .attr(centreFont)
    .attr(PBRLink);



//Team PBR
var teamPBR;
teamPBR = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset) * 3 + centreBoxVertHeightOffset, smallRectangleLength, regularRectangleHeight, bevel)
    .attr(requiredEventStyle)
    .attr(PBRLink);

var teamPBRText;
teamPBRText = paper.text(fullWidthCentreBoxHorizontalPosition + 150, (borderTopBottomRectangleHeight + centreBoxesOffset + 8) * 3 + centreBoxVertHeightOffset, "Team PBR")
    .attr(centreFont)
    .attr(PBRLink);

var multiTeamteamPBR;
multiTeamteamPBR = paper.rect(fullWidthCentreBoxHorizontalPosition + 300, (borderTopBottomRectangleHeight + centreBoxesOffset) * 3 + centreBoxVertHeightOffset, smallRectangleLength, regularRectangleHeight, bevel)
    .attr(optionalEventStyle)
    .attr(PBRLink);

var multiTeamteamPBRText;
multiTeamteamPBRText = paper.text(fullWidthCentreBoxHorizontalPosition + 450, (borderTopBottomRectangleHeight + centreBoxesOffset + 8) * 3 + centreBoxVertHeightOffset, "Multi-team PBR")
    .attr(centreFont)
    .attr(PBRLink);
//Single team design workshops
var singleTeamDesignWorkshop;
singleTeamDesignWorkshop = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset) * 4 + centreBoxVertHeightOffset, smallRectangleLength, regularRectangleHeight, bevel)
    .attr(optionalEventStyle)
    .attr({href: "http://less.works/less/technical-excellence/architecture-design.html#Designworkshopswithagilemodeling"});

var singleTeamDesignWorkshopText;
singleTeamDesignWorkshopText = paper.text(fullWidthCentreBoxHorizontalPosition + 150, borderTopBottomRectangleHeight + centreBoxesOffset + 190 + centreBoxVertHeightOffset, "Single Team Design Workshop")
    .attr(centreFont)
    .attr({href: "http://less.works/less/technical-excellence/architecture-design.html#Designworkshopswithagilemodeling"});


//Multi-team design workshops
var multiTeamDesignWorkshop;
multiTeamDesignWorkshop = paper.rect(fullWidthCentreBoxHorizontalPosition + 300, (borderTopBottomRectangleHeight + centreBoxesOffset) * 4 + centreBoxVertHeightOffset, smallRectangleLength, regularRectangleHeight, bevel)
    .attr(optionalEventStyle)
    .attr({href: "http://less.works/less/technical-excellence/architecture-design.html#Multi-teamdesignworkshopsforbroaderdesignissues"});

var multiTeamDesignWorkshopText;
multiTeamDesignWorkshopText = paper.text(fullWidthCentreBoxHorizontalPosition + 450, borderTopBottomRectangleHeight + centreBoxesOffset + 190 + centreBoxVertHeightOffset, "Multi-team Design Workshop")
    .attr(centreFont)
    .attr({href: "http://less.works/less/technical-excellence/architecture-design.html#Multi-teamdesignworkshopsforbroaderdesignissues"});


//Sprint Planning
var sprintPlanning1;
sprintPlanning1 = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset) * 5 + centreBoxVertHeightOffset, largeRectangleLength, regularRectangleHeight, bevel)
    .attr(requiredEventStyle)
    .attr({href: "http://less.works/less/framework/sprint-planning-one.html"});

var sprintPlanning1Text;
sprintPlanning1Text = paper.text(fullWidthCentreBoxHorizontalPosition + 300, borderTopBottomRectangleHeight + centreBoxesOffset + 245 + centreBoxVertHeightOffset, "Sprint Planning One")
    .attr(centreFont)
    .attr({href: "http://less.works/less/framework/sprint-planning-one.html"});

//teriible variable names, wtf do they mean!
var teamSprintPlanning2;
teamSprintPlanning2 = paper.rect(fullWidthCentreBoxHorizontalPosition, (borderTopBottomRectangleHeight + centreBoxesOffset) * 6 + centreBoxVertHeightOffset, smallRectangleLength, regularRectangleHeight, bevel)
    .attr(requiredEventStyle)
    .attr({href: "http://less.works/less/framework/sprint-planning-two.html"});

var teamSprintPlanning2Text;
teamSprintPlanning2Text = paper.text(fullWidthCentreBoxHorizontalPosition + 155, borderTopBottomRectangleHeight + centreBoxesOffset + 300 + centreBoxVertHeightOffset, "Team Sprint Planning 2")
    .attr(centreFont)
    .attr({href: "http://less.works/less/framework/sprint-planning-two.html"});

var multiTeamSprintPlanning;
multiTeamSprintPlanningStyle = paper.rect(fullWidthCentreBoxHorizontalPosition + 300, (borderTopBottomRectangleHeight + centreBoxesOffset) * 6 + centreBoxVertHeightOffset, smallRectangleLength, regularRectangleHeight, bevel)
    .attr(optionalEventStyle)
    .attr({href: "http://less.works/less/framework/sprint-planning-two.html"});

var multiTeamSprintPlanningStyleText;
multiTeamSprintPlanningStyleText = paper.text(fullWidthCentreBoxHorizontalPosition + 455, borderTopBottomRectangleHeight + centreBoxesOffset + 300 + centreBoxVertHeightOffset, "Multi-team Sprint Planning 2")
    .attr(centreFont)
    .attr({href: "http://less.works/less/framework/sprint-planning-two.html"});

//communitys
var architecturecommunity;
architecturecommunity = paper.rect(fullWidthCentreBoxHorizontalPosition, 385 + centreBoxVertHeightOffset, largeRectangleLength, communitiesRectangleHeight, bevel)
    .attr(communityStyle)
    .attr({href: "http://less.works/less/structure/communities.html"});

var architecturecommunityText;
architecturecommunityText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, 423 + centreBoxVertHeightOffset, "Architecure community")
    .attr(centreFont)
    .attr({href: "http://less.works/less/structure/communities.html"});

var testingcommunity;
testingcommunity = paper.rect(fullWidthCentreBoxHorizontalPosition, 435 + 75, largeRectangleLength, communitiesRectangleHeight, bevel)
    .attr(communityStyle)
    .attr({href: "http://less.works/less/structure/communities.html"});

var testingcommunityText;
testingcommunityText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, 460 + 85, "Testing community")
    .attr(centreFont)
    .attr({href: "http://less.works/less/structure/communities.html"});

var developmentcommunity;
developmentcommunity = paper.rect(fullWidthCentreBoxHorizontalPosition, 490 + 90, largeRectangleLength, communitiesRectangleHeight, bevel)
    .attr(communityStyle)
    .attr({href: "http://less.works/less/structure/communities.html"});
var developmentcommunityText;
developmentcommunityText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, 520 + 100, "Development community")
    .attr(centreFont)
    .attr({href: "http://less.works/less/structure/communities.html"});

//Teams
var teamOneCircle;
teamOneCircle = paper.circle(370, 510, 25).animate(teamCircleStyle, 1000)
    .attr(teamLink);
var teamOneCircleText;
teamOneCircleText = paper.text(370, 470, "Team 1")
    .attr(teamFont)
    .attr(teamLink);


var teamTwoCircle;
teamTwoCircle = paper.circle(475, 590, 25).animate(teamCircleStyle, 1000)
    .attr(teamLink);

var teamTwoCircleText;
teamTwoCircleText = paper.text(475, 550, "Team 2")
    .attr(teamFont)
    .attr(teamLink);


var teamThreeCircle;
teamThreeCircle = paper.circle(735, 590, 25).animate(teamCircleStyle, 1000)
    .attr(teamLink);

var teamThreeCircleText;
teamThreeCircleText = paper.text(735, 550, "Team 3")
    .attr(teamFont)
    .attr(teamLink);


var teamFourCircle;
teamFourCircle = paper.circle(840, 510, 25).animate(teamCircleStyle, 1000)
    .attr(teamLink);

var teamFourCircleText;
teamFourCircleText = paper.text(840, 470, "Team n")
    .attr(teamFont)
    .attr(teamLink);

//Sprint Review
var sprintReview;
sprintReview = paper.rect(fullWidthCentreBoxHorizontalPosition, 570 + 100, largeRectangleLength, regularRectangleHeight, bevel)
    .attr(requiredEventStyle)
    .attr({href: "http://less.works/less/framework/sprint-review.html"});

var sprintReviewText;
sprintReviewText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, borderTopBottomRectangleHeight + centreBoxesOffset + 540 + 100, "Sprint Review")
    .attr(centreFont)
    .attr({href: "http://less.works/less/framework/sprint-review.html"});

//Retrospectives
var teamOneRetrospective;
teamOneRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition, 625 + 100, largeRectangleLength, regularRectangleHeight, bevel)
    .attr(requiredEventStyle)
    .attr({href: "http://less.works/less/framework/retrospective.html"});

var teamOneRetrospectiveText;
teamOneRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, 650 + 100, "Team Retrospective")
    .attr(centreFont)
    .attr({href: "http://less.works/less/framework/retrospective.html"});

var overallRetrospective;
overallRetrospective = paper.rect(fullWidthCentreBoxHorizontalPosition, 680 + 100, largeRectangleLength, regularRectangleHeight, bevel)
    .attr(requiredEventStyle)
    .attr({href: "http://less.works/less/framework/overall-retrospective.html"});
var overalRetrospectiveText;
overalRetrospectiveText = paper.text(fullWidthCentreBoxHorizontalPosition + 300, borderTopBottomRectangleHeight + centreBoxesOffset + 650 + 100, "Overal Retrospective")
    .attr(centreFont)
    .attr({href: "http://less.works/less/framework/overall-retrospective.html"});


// Popups at the bottom so they appear on top

largeScaleScrumIsScrumPopUp = paper.popup(leftBarHorizontalPosition * 1.5, leftBarVerticalStartingPosition,
    largeScaleScrumIsScrumPopUpText
    , 'down', 5).hide();//paper.popup()
largeScaleScrumIsScrumText.mouseover(function () {
    largeScaleScrumIsScrumPopUp.show();
});
largeScaleScrumIsScrumText.mouseout(function () {
    largeScaleScrumIsScrumPopUp.hide();
});

transparencyPopUp = paper.popup(leftBarHorizontalPosition * 3.2, leftBarVerticalStartingPosition,
    transparencyPopUpText
    , 'down', 5).hide();//paper.popup()
transparencyText.mouseover(function () {
    transparencyPopUp.show();
});
transparencyText.mouseout(function () {
    transparencyPopUp.hide();
});

continuousImprovementTowardsPerfectionPopUp = paper.popup(leftBarHorizontalPosition + 50, leftBarVerticalStartingPosition + 50,
    continuousImprovementTowardsPerfectionPopUpText
    , 'right', 5).hide();//paper.popup()
continuousImprovementTowardsPerfectionText.mouseover(function () {
    continuousImprovementTowardsPerfectionPopUp.show();
});
continuousImprovementTowardsPerfectionText.mouseout(function () {
    continuousImprovementTowardsPerfectionPopUp.hide();
});


leanThinkingPopUp = paper.popup(leftBarHorizontalPosition + 50, leftBarVerticalStartingPosition + 300,
    leanThinkingPopUpText
    , 'right', 5).hide();//paper.popup()
leanThinkingText.mouseover(function () {
    leanThinkingPopUp.show();
});
leanThinkingText.mouseout(function () {
    leanThinkingPopUp.hide();
});


systemsThinkingPopUp = paper.popup(leftBarHorizontalPosition + 50, leftBarVerticalStartingPosition + 550,
    systemsThinkingPopUpText
    , 'right', 5).hide();//paper.popup()
systemsThinkingText.mouseover(function () {
    systemsThinkingPopUp.show();
});
systemsThinkingText.mouseout(function () {
    systemsThinkingPopUp.hide();
});

moreWithLeSSPopUp = paper.popup(leftBarHorizontalPosition + 661, leftBarVerticalStartingPosition + 100,
    moreWithLeSSPopUpText
    , 'left', 10).hide();//paper.popup()
moreWithLeSSText.mouseover(function () {
    moreWithLeSSPopUp.show();
});
moreWithLeSSText.mouseout(function () {
    moreWithLeSSPopUp.hide();
});


wholeProductFocusPopUp = paper.popup(leftBarHorizontalPosition + 661, leftBarVerticalStartingPosition + 300,
    wholeProductFocusPopUpText
    , 'left', 5).hide();//paper.popup()
wholeProductFocusText.mouseover(function () {
    wholeProductFocusPopUp.show();
});
wholeProductFocusText.mouseout(function () {
    wholeProductFocusPopUp.hide();
});


customerCentricPopUp = paper.popup(leftBarHorizontalPosition + 661, leftBarVerticalStartingPosition + 550,
    customerCentricPopUpText
    , 'left', 5).hide();//paper.popup()
customerCentricText.mouseover(function () {
    customerCentricPopUp.show();
});
customerCentricText.mouseout(function () {
    customerCentricPopUp.hide();
});


empiricalProcessControlPopUp = paper.popup(leftBarHorizontalPosition + 150, leftBarVerticalStartingPosition + 688,
    empircalProcessControlPopUpText
    , 'up', 5).hide();//paper.popup()
empiricalProcessControlText.mouseover(function () {
    empiricalProcessControlPopUp.show();
});
empiricalProcessControlText.mouseout(function () {
    empiricalProcessControlPopUp.hide();
});

queueingTheoryPopUp = paper.popup(leftBarHorizontalPosition + 515, leftBarVerticalStartingPosition + 688,
    queueingTheoryleSSIsScrumPopUpText
    , 'up', 5).hide();//paper.popup()
queueingTheoryText.mouseover(function () {
    queueingTheoryPopUp.show();
});
queueingTheoryText.mouseout(function () {
    queueingTheoryPopUp.hide();
});