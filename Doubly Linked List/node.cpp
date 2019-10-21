#include <iostream>
using namespace std;
class Node
{
public:
  int data;
  Node * next;
  Node * Left;
  Node * Right;


};

class LL
{
public:
  Node * head;

  LL()
  {
    head = NULL;
  }

void insert(int v)
{
  Node * nptr = new Node();
  nptr->data = v;
  nptr->next = NULL;

  if (head == NULL)
  {
    head = nptr;
  }
  else
  {
    Node * tptr = head;
    while (tptr->next != NULL)
    {
      tptr = tptr->next;
    }
    tptr->next = nptr;
  }
}

void print()
{
  if (head != NULL)
  {
    Node * tptr = head;
    cout << tptr->data << endl;
    while (tptr->next != NULL)
    {
      tptr = tptr->next;
      cout << tptr->data << endl;
    }
  }
}

void del(int v)
{
  Node * fptr = head;
  Node * tptr = head;
  while (tptr->next != NULL || tptr->data != v)
  {
    fptr = tptr;
    tptr = tptr->next;
  }
  fptr->next = tptr->next;
}
};
